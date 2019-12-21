import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  products=[

    {id:"s1", name:"Redmi note8 Pro", price:14999, quantity:1, discount:10, features:"(6GB RAM, 64GB Storage)"},
    {id:"s2", name:"Apple Iphone 7", price:24999, quantity:1, discount:15,features:"(12MP Rear Camera | 7MP Front Camera, 32 GB Storage)"},
    {id:"s3", name:"Samsung Galaxy M30s", price:13999, quantity:1, discount:10,features:"(4GB RAM,Super AMOLED Display, 64GB Storage)"},
    {id:"s4", name:"One Plus 7T", price:34999, quantity:1, discount:10,features:"(Glacier Blue, 8GB RAM, Fluid AMOLED Display, 128GB Storage)"},
  
   ]

   cart={};


}
