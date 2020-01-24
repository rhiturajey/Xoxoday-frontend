import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  users: user[];
  // flag: number;
  signInForm = new FormGroup(
    {
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    }
  );
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    // this.getUser();
  }
  // getUser() {

  //   this.userService.getUser().subscribe(data => this.users = data);
  // }

  // validUser(
  //   uname:string,
  //   pass:string) {
  //   this.userService.getUser().subscribe(data => this.users = data);
  //   // console.log(this.userlist);
  //   console.log(this.users);
  //   for (var u of this.users) {
  //     if ((u.userName == uname) && (u.password == pass)) {
  //       this.flag = 1
  //       break;
  //     }
  //     else {
  //       this.flag = 0;
  //     }
  //   }
  //   return this.flag;

  
  async signIn() {
    try{
      var data;
        data= await this.userService.validUser(this.signInForm.get('userName').value,this.signInForm.get('password').value);
      
        if (data) {
        this.router.navigateByUrl("/side-nav");
      }
      else {
        this.router.navigateByUrl("/error");
      }
    }catch(err){

    }
  }
}
