import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AllPostsComponent} from "./all-posts/all-posts.component";
import {BlogItemComponent} from "./blog-item/blog-item.component";
import {CategoriesComponent} from "./categories/categories.component";
import {ContactComponent} from "./contact/contact.component";
import {CreateNewPostComponent} from "./create-new-post/create-new-post.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'all-posts', component: AllPostsComponent},
  {path: 'blog-item', component: BlogItemComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'post', component: CreateNewPostComponent},
  {path: 'all-posts/:id', component: BlogItemComponent},
  {path: ':id', component: BlogItemComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
