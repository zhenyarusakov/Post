import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorizationService} from "../../services/authorization.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

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
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  registration() {
    this.service.registration(this.form.value)
      .subscribe(data => {
        console.log('register', data)
      })
  }

}
