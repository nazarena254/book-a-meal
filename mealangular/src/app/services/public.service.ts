import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { Menu } from '../interface/menu';
import { Menus } from '../classes/menus';
import { Order } from '../classes/order';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  api_url = 'http://127.0.0.1:8000/api/';
  menuArray!: Menus[];

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }

  basicAuth=JSON.parse(localStorage.getItem('password') || '{}');
  

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.basicAuth)
    })
  }

  addMenu(formData: FormData){

    return this.http.post(this.api_url+'menu/', formData, this.httpOptions)

  }

  addOrder(menu: any){
    return this.http.post(this.api_url+'order/', {menu: menu}, this.httpOptions)
  }

  getOrder(){
    return this.http.get(this.api_url+'order/', this.httpOptions)
  }

  getMenu(){
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<Menu[]>(this.api_url+'menu/').subscribe({
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

  // addOrder(menu_id: any){
  //   this.http.post(this.api_url + "order/", {menu_id}, this.httpOptions)
  // }


  
}
