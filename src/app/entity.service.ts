import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  fname:string;
  lname: string;
  email:string;
  constructor() { }

  setData(f:string,l:string,e:string){

    this.fname=f;
    this.lname=l;
    this.email=e;
console.log(this.fname,f)
  }
  getfname()
  {
    return this.fname;
  }
  // ole.log(this.email)
  //   var data={ 
  //     "fname":this.fname,
  //     "lname":this.lname,
  //     "email":this.email
  //   }
  //   console.log(data)
  //   return data;
  getlname()
  {
    return this.lname;
  }
  getemail()
  {
    return this.email;
  }
}
