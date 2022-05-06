import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contact} from "../data/Contact";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  createContact(contact: Contact): Observable<Contact>{
    let data = {
      name: contact.name, email: contact.email, message: contact.message, processed: contact.processed = true
    }

    return this.http.post<Contact>(`https://localhost:5001/api/Contact`, data);
  }

  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(`https://localhost:5001/api/Contact`);
  }

  processedContact(id: number): Observable<Contact>{
    let data = {
      processed: false
    }

    return this.http.patch<Contact>(`https://localhost:5001/api/Contact?id=` + id, data)
  }

  deleteContact(id: number): Observable<Contact>{
    return this.http.delete<Contact>(`https://localhost:5001/api/Contact?id=` + id)
  }
}
