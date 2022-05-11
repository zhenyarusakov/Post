import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Post} from "../../data/Post";

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {

  public post!: Post
  public params!: Params

  constructor(private service: PostService, private route: ActivatedRoute) {
  }

  form!: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      img: new FormControl('', [Validators.required]),
      shortString: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100)]),
      middleString: new FormControl('', [
        Validators.required]),
      longString: new FormControl('', [
        Validators.required]),
      category: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)]),
    })

    this.route.params.subscribe((params: Params) => {
      this.params = params
      this.service.getByIdPost(this.params['id'])
        .subscribe(data => {
          this.form.setValue({
            img: data.img,
            shortString: data.shortString,
            middleString: data.middleString,
            longString: data.longString,
            category: data.category
          })
        })
    })
  }

  update() {
    this.service.updatePost(this.params['id'], this.form.value)
      .subscribe(data => {
        this.post = data
      })
  }
}
