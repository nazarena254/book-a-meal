import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { User } from '../interface/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url: string = 'https://book-a-meal-xd.herokuapp.com/api-auth/';

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string){
    return this.http.post<User>(this.api_url, 
    { username, password}, httpOptions).pipe(
      map(user => {
        if (user) {
          localStorage.setItem("currentUser", JSON.stringify(user));
        }
        return user;
      })
    );
  }
  logout(){
    localStorage.removeItem('currentUser');
  }
}







