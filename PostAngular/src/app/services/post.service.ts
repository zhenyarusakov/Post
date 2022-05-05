import {Injectable} from '@angular/core';
import {Post} from "../data/Post";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  // getAllPosts(category?: string): Observable<Post[]> {
  //   return this.http.get<Post[]>(category === null
  //     ? `https://localhost:5001/api/Post?category=` + category
  //     : `https://localhost:5001/api/Post`)
  // }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://localhost:5001/api/Post`)
  }

  getCategoryPost(category: string): Observable<Post[]> {
    return this.http.get<Post[]>(`https://localhost:5001/api/Post?Category=` + category)
  }

  getFirstFivePosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`https://localhost:5001/api/Post/GetFirstFivePosts`)
  }

  getByIdPost(id: number): Observable<Post> {
    return this.http.get<Post>(`https://localhost:5001/api/Post/` + id)
  }
}
