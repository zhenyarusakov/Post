import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorizationService} from "../../services/authorization.service";
import {Login} from "../../data/Login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthorizationService) { }

  form!: FormGroup

  ngOnInit(): void {
    this.formGroup()
  }

  formGroup() {
    this.form = new FormGroup({
      userName: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  login() {
    this.service.login(this.form.value)
      .subscribe(data => {
        this.service.saveToken(data['accessToken'])
        console.log('data', data)
      })
  }
}
