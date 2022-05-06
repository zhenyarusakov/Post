import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from "../about/about.component";
import {AllPostsComponent} from "../all-posts/all-posts.component";
import {BlogItemComponent} from "../blog-item/blog-item.component";
import {CategoriesComponent} from "../categories/categories.component";
import {HomeComponent} from "../home/home.component";
import {CreateNewPostComponent} from "../create-new-post/create-new-post.component";
import {UpdatePostComponent} from "../update-post/update-post.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    AboutComponent,
    AllPostsComponent,
    BlogItemComponent,
    CategoriesComponent,
    HomeComponent,
    CreateNewPostComponent,
    UpdatePostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class PostModule { }
