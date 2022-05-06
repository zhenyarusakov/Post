import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateContactComponent} from "../create-contact/create-contact.component";
import {GetAllContactComponent} from "../get-all-create-contact/get-all-contact.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../../app-routing.module";
import {ContactItemComponent} from "../contact-item/contact-item.component";



@NgModule({
  declarations: [
    CreateContactComponent,
    GetAllContactComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class ContactModule { }
