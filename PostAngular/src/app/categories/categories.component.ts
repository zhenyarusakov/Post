import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PostService} from "../services/post.service";
import {Post} from "../data/Post";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public posts: Post[] = [];
  public category!: string

  constructor(private activateRoute: ActivatedRoute, private router: Router, private service: PostService) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((params: Params) => {
      this.category = params['category']
      this.getPosts(this.category);
    })
  }

  getPosts(category: string) {
    this.service.getCategoryPost(category)
      .subscribe(data => {
        this.posts = data.reverse()
      })
  }

  goToAllPosts() {
    this.router.navigate(['all-posts'])
  }
}
