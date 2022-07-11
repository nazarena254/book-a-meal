import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization': 'Basic' + btoa('test:test@test.com')
  })
}


@Injectable({
  providedIn: 'root'
})
export class AddMealService {
  api_url = 'http://127.0.1:8000/api/menu/';

  constructor(private http: HttpClient) { }

  addMenu(name:any, description:any, price:any){
    this.http.post(this.api_url, {name, description, price}, httpOptions)
  }
}
