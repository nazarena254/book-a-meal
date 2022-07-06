import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interface/user';

const baseUrl = 'http://127.0.0.1:8000/api/v1/'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private http: HttpClient) { }


  createUser(username: string, email: string, password: string, is_superuser: any) {
    return this.http.post<User>(baseUrl + 'users/', { username, email, password, is_superuser }, httpOptions);
  }

  createCustomer(user: any){
    return this.http.post(baseUrl + 'customers/', {user}, httpOptions);
  }

  createCaterer(user: any){
    return this.http.post(baseUrl + 'caterer/', {user}, httpOptions);
  }

}
