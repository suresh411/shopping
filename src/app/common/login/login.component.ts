import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router) { }
  

  myForm = new FormGroup({
    'Email': new FormControl(null, [Validators.required]),
    'Password': new FormControl(null, [Validators.required])
   })

  ngOnInit() {
    
  }
  onSubmit(p){
    let email = this.myForm.get('Email').value;
    let password = this.myForm.get('Password').value;
    console.log(p)
  
    if (email === 'suresh@gmail.com' && password === 'sure@123'){
      this.router.navigate(['products']);
    } 
  }
 



//   // submit(f){
//   //   console.log(f);
    
//   // }
//   public submit(f): void {
//     this.router.navigate(['products']);
// }

}
