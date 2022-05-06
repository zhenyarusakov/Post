import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateContactComponent} from "../create-contact/create-contact.component";
import {GetAllContactComponent} from "../get-all-create-contact/get-all-contact.component";



@NgModule({
  declarations: [
    CreateContactComponent,
    GetAllContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
