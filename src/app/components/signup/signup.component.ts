import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
payload:any;
  title = 'loginpage';
  signupForm: FormGroup | any;
  submitted= 'false';
  checked = false;
  form: FormGroup = new FormGroup({});
  
  constructor(private router:Router,
    private fb: FormBuilder,private loginservice:LoginService
    ){
     this.signupForm = new FormGroup({
      // Firstname: new FormControl('',[Validators.required,]),
      // Lastname:  new FormControl('',[Validators.required,]),
 
      userID : new FormControl('',[Validators.required,
      Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',)
      ]),
      password: new FormControl('',
      [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')
    ])
     });
     
  }
  ngOnInit(): void {
    
  }

  onSubmit(){
  //  this.submitted = true;
  
  if (this.signupForm.invalid) {
      return;
  }


  if(this.submitted)
  {
    console.log("login successfull");
    console.log(this.signupForm.value);
    this.payload=this.signupForm.value;
    this.payload.register_type="Manual";
    alert("signup sucCess..!");
    this.loginservice.signup(this.payload).subscribe(
      (result)=>console.log(result)
    )
  }

}
get f() { return this.signupForm.controls; }

}
