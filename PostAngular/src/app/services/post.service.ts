import {Injectable} from '@angular/core';
import {Post} from "../data/Post";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Params} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    })
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://localhost:5001/api/PostApi`, {headers: this.getHeaders()})
  }

  getCategoryPost(category: string): Observable<Post[]> {
    return this.http.get<Post[]>(`https://localhost:5001/api/PostApi?Category=` + category, {headers: this.getHeaders()})
  }

  getFirstFivePosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://localhost:5001/api/PostApi/GetFirstFivePosts`, {headers: this.getHeaders()})
  }

  getByIdPost(id: number): Observable<Post> {
    return this.http.get<Post>(`https://localhost:5001/api/PostApi/` + id, {headers: this.getHeaders()})
  }

  addNewPost(newPost: Post): Observable<Post> {
    let data = {
      img: newPost.img, longString: newPost.longString, shortString: newPost.shortString, category: newPost.category
    }

    return this.http.post<Post>(`https://localhost:5001/api/PostApi`, data, {headers: this.getHeaders()})
  }

  updatePost(id: Params, updatePost: Post): Observable<Post> {
    let data = {
      id: id,
      img: updatePost.img,
      longString: updatePost.longString,
      shortString: updatePost.shortString,
      category: updatePost.category
    }

    return this.http.put<Post>(`https://localhost:5001/api/PostApi?id=` + id, data, {headers: this.getHeaders()})
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`https://localhost:5001/api/PostApi?id=` + id, {headers: this.getHeaders()});
  }
}
