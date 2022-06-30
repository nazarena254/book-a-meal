import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roleSelected : any;

  Roles: any =[
    { name: "Caterer", value: 'caterer' },
    { name: "Customer", value: 'customer' }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  changeClient(value: any) {
    this.roleSelected = value;
    console.log(value);
}


  createUser(credentials: any){
    alert(this.roleSelected.value);
  }

}
