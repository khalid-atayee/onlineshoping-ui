import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm:any;

  constructor(private authService:AuthenticationService,private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email: ['', ],
      password: ['',]
    })
  }

  login(){
    this.authService.loginUser(this.loginForm.value).subscribe((data:any)=>{
      localStorage.setItem('apiToken',data.Token);
      this.router.navigate(['dashboard'])
      // dashboard
    });
  }
  goUser(){
    this.authService.getUser().subscribe((data:any)=>{
      console.log(data)
    });
  }

}

