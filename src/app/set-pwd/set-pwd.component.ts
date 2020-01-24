import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { BeginComponent } from '../begin/begin.component';
import { EntityService } from '../entity.service';

@Component({
  selector: 'app-set-pwd',
  templateUrl: './set-pwd.component.html',
  styleUrls: ['./set-pwd.component.css'],
  providers:[BeginComponent]
})
export class SetPwdComponent implements OnInit {

  password = new FormGroup(
    {
      pass: new FormControl('', Validators.required),
      cnf_pass: new FormControl('', Validators.required)
    }
  )
  constructor(private begin: BeginComponent,private dataService: DataService, private router: Router,private entityService: EntityService) { }

  ngOnInit() {
  }
  async onSignIn() {
    console.log(this.password.get('pass').value)
    console.log(this.password.get('pass').value)
    if (this.password.get('pass').value == this.password.get('cnf_pass').value) {
      // var data=this.entityService.getData();
      // console.log(data,this.entityService.email)
      this.dataService.verifyPassword(this.entityService.getfname(),this.entityService.getlname(),this.entityService.getemail(),this.password.get('pass').value);
    }
    else{
      console.log("nahi hua")
    }
  }
}