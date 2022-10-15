import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VerificationComponent } from './components/pages/verification/verification.component';
import { AuthenticationService } from './components/authentication.service';
import { HttpClientModule } from '@angular/common/http';


const appRoute = 
[
  {path:'',component:SigninComponent},
  {path:'signUp',component:SignupComponent},
  {path:'verification',component:VerificationComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    VerificationComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
