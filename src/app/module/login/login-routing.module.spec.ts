import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { routes } from "./login-routing.module";
import { LoginComponent } from './login/login.component';

describe("Router: Login", () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [LoginComponent]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(LoginComponent);
    router.initialNavigation();
  });
  it('redirects you to /login', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/login");
    });
  }));
});