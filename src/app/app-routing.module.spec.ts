import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, RouterModule } from "@angular/router";

import { routes } from "./app-routing.module";
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './module/login/login.module';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { NgModuleFactoryLoader, NgModule, Component } from '@angular/core';

describe("Router: App", () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),
        FormsModule, ReactiveFormsModule, LoginModule, DashboardModule],
        declarations: [AppComponent]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });
  @Component({ template: '' })
  class LoginComponent { }
  @NgModule({ declarations: [LoginComponent],
    imports: [RouterModule.forChild([{path: 'login', component: LoginComponent}])]
 })
  class LoginModule { }
  it('navigate to login module', fakeAsync(() => {
        const loader = TestBed.get(NgModuleFactoryLoader);
        loader.stubbedModules = {
            lazyModule: LoginModule
        };

        router.resetConfig([
        {path: 'login', loadChildren: 'lazyModule'},
        ]);

        router.navigateByUrl('/login');
        tick();
        expect(location.path()).toBe('/login');
  }));
  @Component({ template: '' })
  class DashboardComponent { }
  @NgModule({ declarations: [DashboardComponent],
    imports: [RouterModule.forChild([{path: 'dashboard', component: DashboardComponent}])]
 })
  class DashboardModule { }
  it('navigate dashboard module', fakeAsync(() => {
    const loader = TestBed.get(NgModuleFactoryLoader);
        loader.stubbedModules = {
            lazyModule: DashboardModule
        };

        router.resetConfig([
          {path: 'dashboard', loadChildren: 'lazyModule'},
        ]);

        router.navigateByUrl('/dashboard');
        tick();
        expect(location.path()).toBe('/dashboard');
  }));
});