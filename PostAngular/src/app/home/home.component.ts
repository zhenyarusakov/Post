import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Post} from "../data/Post";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[] = []

  constructor(private router: Router, private service: PostService) {
  }

  ngOnInit(): void {
    this.getFirstFivePosts()
  }

  getFirstFivePosts() {
    this.service.getFirstFivePosts()
      .subscribe(data => {
        this.posts = data.reverse()
      })
  }

  goToAllPosts() {
    this.router.navigate(['all-posts'])
  }
}
