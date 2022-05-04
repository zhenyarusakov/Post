import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PostService} from "../services/post.service";
import {Post} from "../data/Post";
import {Observable} from "rxjs";

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  public post!: Post

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: PostService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.service.getByIdPost(params['id']).subscribe(data => {
        this.post = data;
      })
    })
  }

  goToAllPosts() {
    this.router.navigate(['/all-posts'])
  }
}
