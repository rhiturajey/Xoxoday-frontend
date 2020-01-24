import { Injectable } from '@angular/core';
import { user } from './user';
import { Observable, of, from } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: user[] = [];
  getUser(uname:string,pass: string): Observable<user[]> {
    console.log(uname, pass)
    return this.http.get<user[] >("http://localhost:3000/xoxoday/get?email="+uname+"&pass="+pass);
  }
  validUser(uname: string, pass: string) {
    
    return new Promise((resolve,reject)=>{
      this.getUser(uname,pass).subscribe(data => {
        this.users = data 
        console.log(this.users)
        if(this.users){
          resolve(1);
        }else{
          resolve(0);
        }

      });
  
    })


  }
  constructor(private http: HttpClient) { }
}
