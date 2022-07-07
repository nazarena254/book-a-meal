import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 
import { catchError, first, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  
  myForm!: FormGroup;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      submit: new FormControl('Login'),
    })
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }

    console.log(this.isLoggedIn);

    if (this.isLoggedIn) {
      this.myForm.disable();
    }
  
  }

  Logout(){
    this.authService.logout();
    this.tokenStorage.signOut();
    window.location.reload();
  }

  get f(){
    return this.myForm.controls;
  }

  handleError(error: any) {
    alert(error.error[Object.keys(error.error)[0]]);
    return throwError(error);
  }


  onSubmit() {
    this.authService.loginUser(this.f['username'].value, this.f['password'].value).pipe(catchError(this.handleError), first()).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        window.location.href = '/landing';
      }
      
    )
  }

}
