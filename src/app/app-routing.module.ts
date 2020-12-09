import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForemployersComponent } from './foremployers/foremployers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FeatureComponent} from './feature/feature.component';
import { FeatureDetailComponent } from './feature-detail/feature-detail.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { profile } from 'console';
import { ViewProfileComponent } from './view-profile/view-profile.component';
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
    path:'feature.html', component:FeatureComponent
  },
  {
    path:'feature-detail.html', component:FeatureDetailComponent
  },
  {
    path:'edit-profile.html', component:EditProfileComponent
  },
  {
    path:'view-profile.html', component:ViewProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
