import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  
  user: any = {
    email:'amol@gmail.com',
    password: 'amol123'
  } 

  constructor(private fb: FormBuilder,
    private router: Router,) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(6)]]
    })
  }
  login() {
    console.log('-------login-------');
    
    if(this.loginForm.controls['email'].hasError('required')) {
      this.loginForm.controls['email'].setErrors({'required': true})
    } else if(this.loginForm.controls['email'].hasError('email')) {
      this.loginForm.controls['email'].setErrors({'email': true})
    } else if(this.loginForm.controls['password'].hasError('required')) {
      this.loginForm.controls['password'].setErrors({'required': true})
    } else {
      if(this.user.email == this.loginForm.controls['email'].value && 
      this.user.password == this.loginForm.controls['password'].value) {
        this.router.navigate(['/dashboard']);
      }
    }
  }

}
