import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/services/auth-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  is_caterer : any;
  is_customer: any;

  Roles: any =[
    { name: "Caterer", value: 'caterer' },
    { name: "Customer", value: 'customer' }
  ];
  

  constructor(private service: AuthUserService) { }

  ngOnInit(): void {
  }

  changeClient(value: any) {
    if (value.value == 'caterer') {
      this.is_caterer = true;
      this.is_customer = false;
    } else{
      this.is_caterer = false;
      this.is_customer = true;
    }
}


  createUser(credentials: any){

    this.service.createUser(credentials.username, credentials.email, credentials.password, this.is_caterer, this.is_customer).subscribe(
      (data: any) => {
        console.log(data);
      })

      window.location.href = '/login';

    }

    
}
