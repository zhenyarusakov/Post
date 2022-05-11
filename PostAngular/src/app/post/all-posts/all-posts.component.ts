import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {Post} from "../../data/Post";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  public posts: Post[] = []
  public post!: Post

  public role = localStorage.getItem('role')

  constructor(private activateRoute: ActivatedRoute, private router: Router, private service: PostService) {
  }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.service.getAllPosts()
      .subscribe(data => {
        console.log(data)
        this.posts = data.reverse()
      })
  }

  deletePost(id: number){
    this.service.deletePost(id)
      .subscribe(data => {
        this.post = data
        this.getPosts()
      })
  }

  goToAllPosts() {
    this.router.navigate(['/all-posts'])
  }
}
