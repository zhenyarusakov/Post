import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Registration} from "../data/Registration";
import {Login} from "../data/Login";
import {TokenResponse} from "../data/TokenResponse";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) {
  }

  public role = localStorage.getItem('role')

  get token(): string {
    let date = localStorage.getItem('refreshTokenExpiration')!.toString()

    if( new Date().toString() > date){
      this.logout()
      return ''
    }

    return localStorage.getItem('accessToken')!
  }

  login(login: Login): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`https://localhost:5001/api/Authenticate/login`, login)
      .pipe(
        tap(this.setToken)
      )
  }

  logout() {
    this.setToken(null!)
  }

  private setToken(response: TokenResponse) {
    if(response){
      localStorage.setItem('accessToken', response.accessToken)
      localStorage.setItem('refreshTokenExpiration', response.refreshTokenExpiration)
      localStorage.setItem('role', response.role)
    }
    else {
      localStorage.clear()
    }
  }

  registration(registration: Registration): Observable<Registration>{
    return this.http.post<Registration>(`https://localhost:5001/api/Authenticate/register`, registration)
  }

}
