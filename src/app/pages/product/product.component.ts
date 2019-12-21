import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  allproducts=[]
  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.allproducts=this.service.products;

  }

  addtocart(p:any){
    if(this.service.cart.hasOwnProperty(p.id)){
      this.service.cart[p.id].quantity+=1
     }else{
      this.service.cart[p.id]=p
    }
  }

}
