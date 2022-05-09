import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorizationService} from "../../services/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthorizationService, private router: Router) { }

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
      .subscribe(() => {
        this.form.reset()
        this.reloadPage()
      })
  }

  reloadPage() {
    setTimeout(()=>{

      window.location.reload();
    }, 50);
    this.router.navigate(['/all-posts'])
  }
}
