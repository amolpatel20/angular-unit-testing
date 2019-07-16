import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginModule} from './module/login/login.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './module/dashboard/dashboard.module';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./module/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./module/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule, LoginModule, DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
