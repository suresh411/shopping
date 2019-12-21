import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems=[];
  total=0;
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.cartitems=Object.values(this.service.cart)
    this.subtotal()
  }

  subtotal(){
    this.total=0
    for (let i = 0; i < this.cartitems.length; i++) {
      this.total+=(this.cartitems[i].quantity*this.cartitems[i].price)
      
      }
  }


  decreasequantity(p:any){
     if(this.service.cart[p.id].quantity>1){
       this.service.cart[p.id].quantity-=1
     }else{
       delete this.service.cart[p.id]
     }
     this.cartitems=Object.values(this.service.cart)
     this.subtotal()
  }

  
  increasequantity(p:any){
    if(this.service.cart[p.id].quantity>=1){
      this.service.cart[p.id].quantity+=1
      this.cartitems=Object.values(this.service.cart)
     this.subtotal()
    }

  }


}
