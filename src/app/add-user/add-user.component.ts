import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}

export class ReactiveFormsModule {
  userForm = new FormGroup(
    { fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      acess_level: new FormControl(''),
      department: new FormControl(''),
      designation: new FormControl('') }
    );


}

