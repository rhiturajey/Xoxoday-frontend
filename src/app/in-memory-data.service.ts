import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { of, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const user = [
      { id: 1, userName: 'rhitu@iul.ac.in', password: '12345' },
      { id: 2, userName: 'rajey@iul.ac.in', password: '67890' },
      { id: 3, userName: 'kriti@iul.ac.in', password: 'qwerty' },
      { id: 4, userName: 'sharique@iul.ac.in', password: 'asdfg' },
      { id: 5, userName: 'imtiyaz@iul.ac.in', password: 'zxcvb' }
    ];
  // console.log(SignInComponent.uname);
  // for (const u of user) {

  //   if ((u.userName == SignInComponent.uname) && (u.password == SignInComponent.pass)) {
  //     return of(user[u.id]);
  //   }
  // }
  // console.log(this.flag);
  // console.log(user);
  //   return of(user[0]);
  return {user};
  }


  // genId(heroes: user[]): number {
  //   return heroes.length > 0 ? Math.max(...user.map(user => user.id)) + 1 : 11;
  // }


} 