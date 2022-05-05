import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.css']
})
export class CreateNewPostComponent implements OnInit {

  constructor() { }

  form!: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({})
  }
}
