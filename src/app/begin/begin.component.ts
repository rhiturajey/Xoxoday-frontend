import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtpService } from '../otp.service';
import { EntityService } from '../entity.service';


@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.css']
})
export class BeginComponent implements OnInit {

Begin=new FormGroup(
  { 
    fname:new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required)
  }
)

  constructor(private entityService:EntityService,private router: Router,private otpService: OtpService) { }

  ngOnInit() {
  }

  otp(){
    this.otpService.generateOtp();
    
  }
  onBegin(){
    this.otp();
    this.entityService.setData(this.Begin.get('fname').value,this.Begin.get('lname').value,this.Begin.get('email').value)
    this.router.navigateByUrl("/nav-bar/code-verify")
  }
}
