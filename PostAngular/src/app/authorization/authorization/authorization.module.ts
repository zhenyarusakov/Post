import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "../login/login.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../../app-routing.module";
import {RegistrationComponent} from "../register/registration.component";



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
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
export class AuthorizationModule { }
