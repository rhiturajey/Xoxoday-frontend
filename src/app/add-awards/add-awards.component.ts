import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-awards',
  templateUrl: './add-awards.component.html',
  styleUrls: ['./add-awards.component.css']
})
export class AddAwardsComponent implements OnInit {
  isSubmitted = false;
  GiftForm = this.fb.group({
    gifts: ['', [Validators.required]]
  })

  constructor(public fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.isSubmitted = true;
    if(!this.GiftForm.valid) {
      return false;
    } 
  }
}
