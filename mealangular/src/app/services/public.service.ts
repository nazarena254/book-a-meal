import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { Menu } from '../interface/menu';
import { Menus } from '../classes/menus';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  api_url = 'http://127.0.0.1:8000/api/menu/';
  menuArray!: Menus[];

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  basicAuth=JSON.parse(localStorage.getItem('password') || '{}');
  

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.basicAuth)
    })
  }

  addMenu(formData: FormData){

    return this.http.post(this.api_url, formData, this.httpOptions)

  }

  getMenu(){
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<Menu[]>(this.api_url).subscribe({
        next: (res: Menus[])=>{
  
          this.menuArray = res;
          
          resolve();
        },
        error(error:any){
  
          reject(error)
        },
        complete(){
  
          console.log('complete')
  
        },
        
      });
      });
      return promise
  
  }


  
}
