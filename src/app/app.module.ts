import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
    ,

    RouterModule.forRoot([
      {path:'',component:SigninComponent},
      {path:'signUp',component:SignupComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
