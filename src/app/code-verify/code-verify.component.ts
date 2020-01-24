import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtpService } from '../otp.service';

@Component({
  selector: 'app-code-verify',
  templateUrl: './code-verify.component.html',
  styleUrls: ['./code-verify.component.css']
})
export class CodeVerifyComponent implements OnInit {
  
  // code: any;
  form: FormGroup;
  formInput = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6'];
  @ViewChildren('formRow') rows: any;

  o: any;
  sum(){
    console.log(this.form.get(this.formInput[0]).value)
     this.o=this.form.get(this.formInput[0]).value+this.form.get(this.formInput[1]).value
            +this.form.get(this.formInput[2]).value+this.form.get(this.formInput[3]).value
            +this.form.get(this.formInput[4]).value+this.form.get(this.formInput[5]).value;
            console.log(this.o)
            return this.o
    }

  ngOnInit() { 
  }
  constructor(private otpService: OtpService,private router: Router) {
    this.form = this.toFormGroup(this.formInput);
  }
  toFormGroup(elements) {
    const group: any = {};
    elements.forEach(key => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }
  keyUpEvent(event, index) {
    // console.log(index)
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
      pos = index - 1;
    }
    else {
      pos = index + 1;
    }
    if (pos > -1 && pos < this.formInput.length) {
      this.rows._results[pos].nativeElement.focus();
    }
  }

  otp(){
    this.otpService.generateOtp();
    
  }
  onVerify() {
    console.log(this.otpService.code['otp'])
    console.log(this.sum())
    if(this.otpService.code['otp']==this.sum())
    {
  
      this.router.navigateByUrl("/nav-bar/set-pwd")
      console.log(this.form.value);
    }
    else{
        this.router.navigateByUrl("/error");
    }
  }

}
