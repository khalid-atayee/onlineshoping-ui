import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  registerUser(userForm:any){

    return this.httpClient.post('http://127.0.0.1:8000/api/auth/register',userForm)

  }
  loginUser(userForm:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/auth/login',userForm)
  }

  getUser(){
   let header = new HttpHeaders()
    .set('Authorization', `Bearer ${localStorage.getItem('apiToken')}`)
    .set('Content-Type', 'application/json')
    return this.httpClient.get('http://127.0.0.1:8000/api/user',{headers: header});
  }

  userAuth(otpForm:any,id:any)
  {

    return this.httpClient.post('http://127.0.0.1:8000/api/auth/verify',{otpForm,id});
    
  }

  loggedIn(){
    return !!localStorage.getItem('apiToken');
    
  }
}
