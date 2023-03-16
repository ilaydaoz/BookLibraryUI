import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, Category, Order, User, UserType } from '../models/models';


@Injectable({
    providedIn: 'root',
  })
  export class ApiService {
    baseUrl = 'https://localhost:7038/api/Library/';
    constructor(private http: HttpClient) {}
  
    createAccount(user: User) {
      return this.http.post(this.baseUrl + 'CreateAccount', user, {
        responseType: 'text',
      });
    }
    
    getAllBooks() {
        return this.http.get<Book[]>(this.baseUrl + 'GetAllBooks');
      }
}
