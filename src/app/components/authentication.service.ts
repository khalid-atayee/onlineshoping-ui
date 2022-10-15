import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  registerUser(userForm:any){
    
    return this.httpClient.post('http://127.0.0.1:8000/api/register',userForm)

  }
}
