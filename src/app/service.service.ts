import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  img1="assets/images/miredmi8a.jpeg";
  img2="assets/images/oppof11pro.png";
  img3="assets/images/realme-3i.jpeg";
  img4="assets/images/redmik20.jpeg";
  img5="assets/images/samsung-galaxy-a10.jpeg";
  img6="assets/images/realme-3i.jpeg"

  products=[

    {id:"s1", name:"Redmi note8 Pro", price:14999, quantity:1, discount:10, features:"(6GB RAM, 64GB Storage,48MP Rear Camera)",img:this.img1},
    {id:"s2", name:"Apple Iphone 7", price:24999, quantity:1, discount:15,features:"(12MP Rear Camera | 7MP Front Camera, 32 GB)",img:this.img2},
    {id:"s3", name:"Samsung Galaxy M30s", price:13999, quantity:1, discount:10,features:"(4GB RAM,Super AMOLED Display, 64GB Storage)",img:this.img3},
    {id:"s4", name:"One Plus 7T", price:34999, quantity:1, discount:10,features:"(Glacier Blue, 8GB RAM, Fluid AMOLED Display, 128GB)",img:this.img4},
    {id:"s5", name:"Redmi note8 Pro", price:14999, quantity:1, discount:10, features:"(6GB RAM, 64GB Storage)",img:this.img1},
    {id:"s6", name:"Apple Iphone 7", price:24999, quantity:1, discount:15,features:"(12MP Rear Camera | 7MP Front Camera, 32 GB)",img:this.img2},
    {id:"s7", name:"Samsung Galaxy M30s", price:13999, quantity:1, discount:10,features:"(4GB RAM,Super AMOLED Display, 64GB Storage)",img:this.img3},
    {id:"s8", name:"One Plus 7T", price:34999, quantity:1, discount:10,features:"(Glacier Blue, 8GB RAM, Fluid AMOLED Display, 128GB)",img:this.img4},
    {id:"s9", name:"Redmi note8 Pro", price:14999, quantity:1, discount:10, features:"(6GB RAM, 64GB Storage)",img:this.img1},
    {id:"s10", name:"Apple Iphone 7", price:24999, quantity:1, discount:15,features:"(12MP Rear Camera | 7MP Front Camera, 32 GB)",img:this.img2},
    {id:"s11", name:"Samsung Galaxy M30s", price:13999, quantity:1, discount:10,features:"(4GB RAM,Super AMOLED Display, 64GB Storage)",img:this.img3},
    {id:"s12", name:"One Plus 7T", price:34999, quantity:1, discount:10,features:"(Glacier Blue, 8GB RAM, Fluid AMOLED Display, 128GB)",img:this.img4},

   ]

   cart={};


}
