import { Injectable } from '@angular/core';
import { otps } from './otp';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OtpService {
  constructor(private http: HttpClient) { }

  code: any;
  getOtp() {
    return this.http.get<otps[]>("http://localhost:3000/xoxoday/getOtp");
  }
  async generateOtp() {
   await this.getOtp().subscribe(data => {
      this.code = data
      console.log(this.code)
    })
  } 
}
