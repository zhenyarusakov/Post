import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAllPosts() {
    this.router.navigate(['/all-posts'])
  }
}
