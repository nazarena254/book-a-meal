import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
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
  constructor (private pService: PublicService, public tokenStorage: TokenStorageService, public authService: AuthService) {

  }
  ngOnInit(): void {
   

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }

    console.log(this.isLoggedIn);
  
  }


  Logout(){
    this.authService.logout();
    this.tokenStorage.signOut();
    window.location.reload();    
  }

  LogOut(){
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
