import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../data/Contact";

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  public contact!: Contact;

  constructor(private service: ContactService) { }

  form!: FormGroup

  ngOnInit(): void {
    this.formGroup()
  }

  formGroup(){
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]),
      email: new  FormControl('', [
        Validators.required,
        Validators.email
      ]),
      message: new  FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1000)
      ])
    })
  }

  submit() {
    this.service.createContact(this.form.value)
      .subscribe(data => {
        this.contact = data
      })

    this.form.reset()
  }
}
