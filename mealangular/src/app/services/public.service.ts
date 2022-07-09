import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  api_url = 'http://127.0.0.1:8000/api/menu/';

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic'+btoa(this.tokenStorage.getUsername()+':'+this.tokenStorage.getPassword())
    })
  }

  addMenu(formData: FormData){

    this.http.post(this.api_url, formData, this.httpOptions)

  }

  
}
