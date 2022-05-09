import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Contact} from "../data/Contact";
import {Observable} from "rxjs";
import {Post} from "../data/Post";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    })
  }

  createContact(contact: Contact): Observable<Contact>{
    let data = {
      name: contact.name, email: contact.email, message: contact.message, processed: contact.processed = true
    }

    return this.http.post<Contact>(`https://localhost:5001/api/ContactApi`, data, {headers: this.getHeaders()});
  }

  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(`https://localhost:5001/api/ContactApi`, {headers: this.getHeaders()});
  }

  processedContact(id: number): Observable<Contact>{
    let data = {
      processed: false
    }

    return this.http.patch<Contact>(`https://localhost:5001/api/ContactApi?id=` + id, data, {headers: this.getHeaders()})
  }

  deleteContact(id: number): Observable<Contact>{
    return this.http.delete<Contact>(`https://localhost:5001/api/ContactApi?id=` + id, {headers: this.getHeaders()})
  }

  getContactById(id: number): Observable<Contact>{
    return  this.http.get<Contact>(`https://localhost:5001/api/ContactApi/` + id, {headers: this.getHeaders()})
  }
}
