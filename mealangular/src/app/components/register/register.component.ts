import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  is_superuser : any;
  isSuccessful = false;
  isSignUpFailed = false;
  isLoggedIn: boolean = false;
  form: any;
  myGroup !: FormGroup;



  Roles: any =[
    { name: "Caterer", value: 'caterer' },
    { name: "Customer", value: 'customer' }
  ];

  handleError(error: any) {
    alert(error.error[Object.keys(error.error)[0]]);
    return throwError(error);
  }


  constructor(private service: AuthUserService, private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }

    this.myGroup = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl(''),
      submit: new FormControl('Register'),
    })

    if (this.isLoggedIn) {
      this.myGroup.disable();
   }
    
  }

  changeClient(value: any) {
    if (value.value == 'caterer') {
      this.is_superuser = true;
    } else{
      this.is_superuser = false;
    }
}
onSubmit(credentials: any): void {

  
  this.service.createUser(credentials.username, credentials.email, credentials.password, this.is_superuser).pipe(catchError(this.handleError)).subscribe(
    data => {
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      if (data.is_superuser == false) {
        this.service.createCustomer(data.id).pipe(catchError(this.handleError)).subscribe(
          ids => {
            console.log(ids);
          })
      } else{
        this.service.createCaterer(data.id).pipe(catchError(this.handleError)).subscribe(
          ids => {
            console.log(ids);
          })
      }
      window.location.href = '/login';
    }
  )

  }
    
}





    
 
