import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorService } from './error.service'
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
 selector: 'novopay-main',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(private _fb: FormBuilder) {
   console.log("Novopay Angular Project")
 }

 formData: FormGroup;

 ngOnInit(): void {
   this.formData = this.createForm();
 }

 createForm() {
    return this._fb.group({
        firstName: ['', [Validators.required]],
        secondName: ['', Validators.minLength(20)],
        email: ['', ErrorService.emailValidator]
        // Add extra validators
    });
 }
 saveUser() {
  console.log('Form submitted');
 }
}
