import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ErrorService } from './error.service';

@Component({
  selector: 'error-msg',
  templateUrl: './errorMsg.component.html'
})
export class ErrorMsg {

  @Input() control: FormControl;
  @Input() fieldName: string;
  constructor() { }

  get errorMessage() {
    // this method will always keep listing to the changes that are happeing on the given control --Anil
    for (const propertyName in this.control.errors) {
      // hasOwn prop is used to avoid the conflict with the angular default validations which are part for its prototype --Anil
      // Check only when it is touched
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ErrorService.errorMessage(propertyName, this.control.errors[propertyName], this.fieldName);
      }
    }
    return null;
  }
}
