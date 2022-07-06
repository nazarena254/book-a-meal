import { Component } from '@angular/core';
import { PublicService } from './services/public.service';
import { TokenStorageService } from './services/token-storage.service';

declare var fixNav: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book A Meal - The World\'s Best Food Delivery Site!';
  msg: any;
  isLoggedIn: boolean = false;
  constructor (private pService: PublicService, public tokenStorage: TokenStorageService) {

  }
  ngOnInit(): void {
   

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }

    console.log(this.isLoggedIn);
  
  }

  LogOut(){
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
