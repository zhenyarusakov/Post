import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../data/Contact";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-all-contact',
  templateUrl: './get-all-contact.component.html',
  styleUrls: ['./get-all-contact.component.css']
})
export class GetAllContactComponent implements OnInit {

  public contacts: Contact[] = []
  public contact!: Contact

  constructor(private router: Router,private service: ContactService) { }

  ngOnInit(): void {
    this.getContact()
  }

  getContact(){
    this.service.getContact()
      .subscribe(data => {
        console.log(data)
        this.contacts = data
      })
  }

  processed(id: number) {
    this.service.processedContact(id)
      .subscribe(data => {
        this.contact = data
        this.getContact()
      })
  }

  delete(id: number) {
    this.service.deleteContact(id)
      .subscribe(data => {
        this.contact = data
        this.getContact()
      })
  }
}
