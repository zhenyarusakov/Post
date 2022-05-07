import {Injectable} from '@angular/core';
import {Post} from "../data/Post";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Params} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://localhost:5001/api/PostApi`)
  }

  getCategoryPost(category: string): Observable<Post[]> {
    return this.http.get<Post[]>(`https://localhost:5001/api/PostApi?Category=` + category)
  }

  getFirstFivePosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://localhost:5001/api/PostApi/GetFirstFivePosts`)
  }

  getByIdPost(id: number): Observable<Post> {
    return this.http.get<Post>(`https://localhost:5001/api/PostApi/` + id)
  }

  addNewPost(newPost: Post): Observable<Post>{
    let data = {
      img: newPost.img, longString: newPost.longString, shortString: newPost.shortString, category: newPost.category
    }

    return  this.http.post<Post>(`https://localhost:5001/api/PostApi`, data)
  }

  updatePost(id: Params, updatePost: Post): Observable<Post>{
    let data = {
      id: id, img: updatePost.img, longString: updatePost.longString, shortString: updatePost.shortString, category: updatePost.category
    }

    return this.http.put<Post>(`https://localhost:5001/api/PostApi?id=` + id, data)
  }

  deletePost(id: number): Observable<Post>{
    return this.http.delete<Post>(`https://localhost:5001/api/PostApi?id=` + id);
  }
}
