import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureprojectsComponent } from './featureprojects/featureprojects.component';
import { ForemployersComponent } from './foremployers/foremployers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'employer-login.html', component: ForemployersComponent
  },
  {
    path: 'login.html', component: LoginComponent
  },
  {
    path:'signup.html', component:SignupComponent
  },
  {
    path:'features.html', component:FeatureprojectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
