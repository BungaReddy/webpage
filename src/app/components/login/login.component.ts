import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: any = FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private loginservice: LoginService) { }

  get f() { return this.LoginForm.controls; }
  onSubmit() {

    this.submitted = true;

    if (this.LoginForm.invalid) {
      return;
    }


    if (this.submitted) {
      console.log("login successfull");
      console.log(this.LoginForm.value);
      this.loginservice.login(this.LoginForm.value).subscribe(
        (results) => {
          console.log(results);
        }
      )
      alert("Great!!");
    }

  }
  ngOnInit() {

    this.LoginForm = this.formBuilder.group({
      userID: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
}






