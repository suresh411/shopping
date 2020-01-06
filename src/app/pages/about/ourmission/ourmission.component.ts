import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ourmission',
  templateUrl: './ourmission.component.html',
  styleUrls: ['./ourmission.component.css']
})
export class OurmissionComponent implements OnInit {
  singleproduct={};
  singleproducts={};
  constructor( private ser:ServiceService, private actroute:ActivatedRoute) { }

  ngOnInit() {
    for (const key in this.ser.products) {
     this.singleproduct[this.ser.products[key].id]=this.ser.products[key]
    };

    this.actroute.params.subscribe(p =>{
      this.singleproducts=this.singleproduct[p.suresh]
    })
  }

}
