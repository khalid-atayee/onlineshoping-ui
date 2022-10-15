import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
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

    // if(length==checkLength){
    // }
  }

}
