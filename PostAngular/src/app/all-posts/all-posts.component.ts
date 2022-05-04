import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotToAllPosts() {
    this.router.navigate(['/all-posts'])
  }
}
