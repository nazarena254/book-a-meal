import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-menu-caterer',
  templateUrl: './menu-caterer.component.html',
  styleUrls: ['./menu-caterer.component.css']
})



export class MenuCatererComponent implements OnInit {

  menuForm = new FormGroup({
    mealName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required]),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // TODO: Use EventEmitter with form value
  console.warn(this.menuForm.value);
  }

}
