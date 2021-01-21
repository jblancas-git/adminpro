import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Page404Component } from './pages/page404/page404.component';
import { MainPagesComponent } from './pages/main-pages.component';

// Definición de rutas
const routes: Routes = [
  { path:'',
    component:MainPagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'grafica1', component: Grafica1Component},
      { path: 'progress', component: ProgressComponent},    
      { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: Page404Component},

];


@NgModule({
  declarations: [],
  imports: [
    /* Hacer accesibles las rutas*/
    RouterModule.forRoot( routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
