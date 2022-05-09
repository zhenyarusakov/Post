import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../data/Contact";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  public contact!: Contact
  form!: FormGroup
  constructor(private route: ActivatedRoute, private service: ContactService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.service.getContactById(params['id'])
        .subscribe(data => {
          this.contact = data
          this.form.setValue({
            name: data.name,
            email: data.email,
            message: data.message,
          })
        })
    })

    this.formGroup()
  }

  formGroup(){
    this.form = new FormGroup({
      name: new FormControl(),
      email: new  FormControl(),
      message: new  FormControl()
    })
  }

}
