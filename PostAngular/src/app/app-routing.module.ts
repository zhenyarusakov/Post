import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./post/home/home.component";
import {AboutComponent} from "./post/about/about.component";
import {AllPostsComponent} from "./post/all-posts/all-posts.component";
import {BlogItemComponent} from "./post/blog-item/blog-item.component";
import {CategoriesComponent} from "./post/categories/categories.component";
import {CreateNewPostComponent} from "./post/create-new-post/create-new-post.component";
import {UpdatePostComponent} from "./post/update-post/update-post.component";
import {GetAllContactComponent} from "./contact/get-all-create-contact/get-all-contact.component";
import {CreateContactComponent} from "./contact/create-contact/create-contact.component";
import {ContactItemComponent} from "./contact/contact-item/contact-item.component";
import {LoginComponent} from "./authorization/login/login.component";
import {RegistrationComponent} from "./authorization/register/registration.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'all-posts', component: AllPostsComponent},
  {path: 'blog-item', component: BlogItemComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'post', component: CreateNewPostComponent},
  {path: 'all-contact', component: GetAllContactComponent},
  {path: 'create-contact', component: CreateContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},

  {path: 'all-posts/:id', component: BlogItemComponent},
  {path: 'contact-item/:id', component: ContactItemComponent},
  {path: ':id', component: BlogItemComponent},
  {path: 'update-post/:id', component: UpdatePostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
