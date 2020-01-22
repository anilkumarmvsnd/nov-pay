import { ErrorMsg } from './errorMsg.component';
import { CheckTree } from './check-tree/checkTree.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
   bootstrap: [ AppComponent ],
 imports: [
     BrowserModule, FormsModule, ReactiveFormsModule
 ],
 declarations: [ AppComponent, ErrorMsg, CheckTree],
})
export class AppModule {
}
