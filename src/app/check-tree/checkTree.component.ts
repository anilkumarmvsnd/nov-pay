import { Component, Input, Renderer2, ElementRef, OnInit, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { type } from 'os';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
 selector: 'check-tree',
 templateUrl: './checkTree.component.html',
 styleUrls: ['./checkTree.component.css']
})

export class CheckTree implements OnInit {

  @Input() obj: any;
  @ViewChild('childCheck', {static: true}) childCheck: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.initializeCheckBoxes(Object.keys(this.obj));
  }

  initializeCheckBoxes(keys: Array<string>) {
    keys.forEach(element => {
      const container = this.addCheckBox(element);
      this.childCheck.nativeElement.appendChild(container);
    });
  }
  createLable(value) {
    const label = this.renderer.createElement('label') as ElementRef;
    const text = this.renderer.createText('- ' + value);
    this.renderer.appendChild(label, text);
    this.renderer.setAttribute(label, 'id', value + 'id');
    this.renderer.setAttribute(label, 'data-child', JSON.stringify(this.obj[value]));
    this.renderer.listen(label, 'click', this.lableClicked.bind(this));
    return label;
  }

  lableClicked($event) {
    const key = $event.target.textContent.split('- ')[1];
    const child = this.getChildrens(key, this.obj);
    const id = $event.target.id;
    const keys = Object.keys(child);
    this.appendEleWithId(id, keys);
  }

  getChildrens(key, obj) {
    const keys = Object.keys(obj);
    if (keys.indexOf(key) !== -1) {
      return this.obj[key];
    } else {
      for (const k of keys) {
        if (typeof(obj[k]) === 'object') {
          this.getChildrens(key, obj[k]);
        }
      }
    }
  }

  appendEleWithId(id, keys) {
    const aa = document.getElementById(id);
    keys.forEach(key => {
      if (!document.getElementById(key+ 'id')) {
        const container: ElementRef = this.addCheckBox(key);
        aa.appendChild(container.getRootNode());
      }
    });
  }

  createCheckBoxContainer(elementName) {
    const container = this.renderer.createElement(elementName) as ElementRef;
    this.renderer.addClass(container, 'check-label-con');
    return container;
  }

  createEleClass(eleName, className) {
    const element: ElementRef = this.renderer.createElement(eleName);
    this.renderer.addClass(element, className);
    return element;
  }

  addCheckBox(value) {
    const container = this.createCheckBoxContainer('div');
    const subContainer = this.createEleClass('div', 'input-lable') as ElementRef;
    this.renderer.appendChild(subContainer, this.createLable(value));
    this.renderer.appendChild(container, subContainer);
    return container;
  }
}
