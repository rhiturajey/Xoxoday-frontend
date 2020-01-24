import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { SetPwdComponent } from './set-pwd/set-pwd.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  setdata(fname:string,lname:string,email:string,pass:string)
  {
    return this.http.post("http://localhost:3000/xoxoday/post",
    {
      "firstName": fname,
      "lastName": lname,
      "email": email,
      "password": pass

    })
  }
 async verifyPassword(fname:string,lname:string,email:string,pass:string){
 
        await this.setdata(fname,lname,email,pass).subscribe(data=>{console.log(data)})
 
  }
  

}
 