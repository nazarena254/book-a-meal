import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  items: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.totalPrice = this.gettotalPrice();
  }
  
  gettotalPrice(): number{
    // let totalPrice = 0;
    this.items.forEach(item => {
      // console.log(item[1])
        this.totalPrice += Number(item[1]);
    });
    console.log(this.totalPrice);
    return this.totalPrice;

}

}
