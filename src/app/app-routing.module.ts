import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { ContactComponent } from './pages/about/contact/contact.component';
import { ServicesComponent } from './pages/about/services/services.component';
import { OurmissionComponent } from './pages/about/ourmission/ourmission.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent, children:[
    // {path:"", redirectTo:"services",pathMatch:"full"},
    {path:"contact", component:ContactComponent},
    {path:"services", component:ServicesComponent},
    {path:"services/:suresh", component:ServicesComponent},
    {path:"ourmission", component:OurmissionComponent},
    {path:"ourmission/:suresh", component:OurmissionComponent}

  ]},
  {path:"products", component:ProductComponent},
  {path:"cart", component:CartComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
