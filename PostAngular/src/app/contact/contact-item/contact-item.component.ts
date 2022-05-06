import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../data/Contact";

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  public contact!: Contact

  constructor(private route: ActivatedRoute, private service: ContactService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.service.getContactById(params['id'])
        .subscribe(data => {
          this.contact = data
        })
    })
  }

}
