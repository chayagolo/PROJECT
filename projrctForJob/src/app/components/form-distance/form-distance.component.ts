import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-distance',
  templateUrl: './form-distance.component.html',
  styleUrls: ['./form-distance.component.css']
})
export class FormDistanceComponent implements OnInit {

  constructor( private fb: FormBuilder) { }
  form = this.fb.group({
    from: this.fb.control('', [Validators.required]),
    to: this.fb.control('', [Validators.required]),
  });
  ngOnInit(): void {
  }
  calculateDistance(){

  }
}
