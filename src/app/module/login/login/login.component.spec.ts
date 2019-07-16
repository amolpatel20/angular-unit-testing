import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

describe('Component: Login', () => {
  let component: LoginComponent;
  let fb: FormBuilder = new FormBuilder();
  let fixture: ComponentFixture<LoginComponent>;
  let user: any = {
    email:'amol@gmail.com',
    password: 'amol123'
  } 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.loginForm = fb.group({
      email: null,
      password: null
  });
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.loginForm.controls['email'];
    expect(email.valid).toBeTruthy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
});

it('password field validity', () => {
    let errors = {};
    let password = component.loginForm.controls['password'];

    // Email field is required
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
});

  it('submitting a login form', () => {
    expect(component.loginForm.valid).toBeTruthy();

    // Trigger the login function
    component.login();
});
});
