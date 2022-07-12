import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/components/login/login.component';
import { HomeComponent } from '../app/components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "login",component:LoginComponent
  },
  {
    path: "home",component:HomeComponent
  },
  {
  path: "signup",component:SignupComponent
},

  { path: "", redirectTo: "home", pathMatch: "full" },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    ,FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
