import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Login} from "../data/Login";
import {Registration} from "../data/Registration";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  login(login: any): Observable<any>{
    return this.http.post(`https://localhost:5001/api/Authenticate/login`, login)
  }

  registration(registration: any): Observable<Registration>{
    return this.http.post<Registration>(`https://localhost:5001/api/Authenticate/register`, registration);
  }

  saveToken(token: any){
    localStorage.setItem('token', token)
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
