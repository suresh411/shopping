import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
mypro=[];
features="";


  constructor(private activaterouter:ActivatedRoute,private serv:ServiceService) { }
  




  ngOnInit() {
    // this.my=Object.values(this.serv.cart)
    // console.log(this.my)
    // console.log(this.serv.cart)
    this.mypro=Object.values(this.serv.cart)
    this.activaterouter.params.subscribe(p => {
      if(Object.keys(p).length===0){
        this.features=this.serv.cart['s1']['features']['price'];
     }else{
      this.features=this.serv.cart[p.suresh]['features']['price'];

     }

    })
   
  }
 


}
