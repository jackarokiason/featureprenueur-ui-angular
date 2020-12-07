import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import{HeaderComponent} from './header/header.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ForemployersComponent } from './foremployers/foremployers.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FeatureprojectsComponent } from './featureprojects/featureprojects.component';
import { LoginheaderComponent } from './loginheader/loginheader.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ForemployersComponent,
    LoginComponent,
    SignupComponent,
    FeatureprojectsComponent,
    LoginheaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
