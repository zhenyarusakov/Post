import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorizationService} from "../../services/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: AuthorizationService, private router: Router) { }

  form!: FormGroup
  token!: string | null

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
        Validators.required,
        // Validators.pattern(/^[0-9]+[a-zA-Z]/),
        // Validators.pattern("[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}")
      ])
    })
  }

  registration() {
    this.service.registration(this.form.value)
      .subscribe((data) => {
        this.service.login(this.form.value)
          .subscribe(() => {
            this.token = localStorage.getItem('token')
            this.form.reset()
            this.router.navigate(['/all-posts'])
          })

      })
    this.reloadPage()
  }

  reloadPage() {
    setTimeout(()=>{

      window.location.reload();
    }, 50);
    this.router.navigate(['/all-posts'])
  }

}
