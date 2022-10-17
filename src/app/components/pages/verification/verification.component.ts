import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  otpForm:any;
  verificationId:any;
  constructor(private fb:FormBuilder,private authService:AuthenticationService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.otpForm=this.fb.group({
      value1:['',],
      value2:['',],
      value3:['',],
      value4:['',],
    })
    this.verificationId = Number(this.route.snapshot.paramMap.get('id'));
   
  }
  move(event:any,prev:any, curr:any,next:any){
    let length = curr.value.length;
    if(length==1){
      if(next!=''){

        next.focus();
      }
    }

    if(event.key==="Backspace"){
      if(prev!=''){
        prev.focus();
      }
    }

  }

  sendOtp(){
    this.authService.userAuth(this.otpForm.value,this.verificationId).subscribe(data=>{

    })
    

  }

}
