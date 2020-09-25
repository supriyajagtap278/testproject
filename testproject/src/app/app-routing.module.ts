import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ProfileModuleComponent } from './profile-module/profile-module.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileModuleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
