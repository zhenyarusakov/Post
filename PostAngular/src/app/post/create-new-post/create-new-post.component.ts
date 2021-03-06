import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {Post} from "../../data/Post";

@Component({
  selector: 'app-create-new-post',
  templateUrl: './create-new-post.component.html',
  styleUrls: ['./create-new-post.component.scss']
})
export class CreateNewPostComponent implements OnInit {

  public posts: Post[] = []
  public selectFile = null



  constructor(private service: PostService) { }

  form!: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      img: new FormControl('', [Validators.required]),
      shortString: new  FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100)]),
      middleString: new  FormControl('', [
        Validators.required]),
      longString: new  FormControl('', [
        Validators.required]),
      category: new  FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)]),
    })

  }

  submit() {
    this.service.addNewPost(this.form.value)
      .subscribe(data => {
        this.posts.push(this.form.value)
        console.log(data)
      })

    this.form.reset()
  }

}
