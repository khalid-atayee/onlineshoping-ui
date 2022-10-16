import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm:any;
  constructor(private fb: FormBuilder,private authService:AuthenticationService) {
  }
  ngOnInit(): void {
    this.userForm=this.userForm=this.fb.group({
      username:['', [Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password : ['',[Validators.required,Validators.minLength(8)]],
      cpassword:['',[Validators.required,Validators.minLength(8)]],
      term : ['',Validators.required]
    })
  }
  get username(){
    return this.userForm.get('username')
  }
  get email(){
    return this.userForm.get('email')
  }
  get password(){
    return this.userForm.get('password')
  }
  get cpassword(){
    return this.userForm.get('cpassword')
  }
  get term(){
    return this.userForm.get('term')
  }

  registerUser(){
    this.authService.registerUser(this.userForm.value).subscribe((res)=>{
    })
  }


}


