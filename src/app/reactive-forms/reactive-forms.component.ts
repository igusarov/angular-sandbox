import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  public myForm = new FormGroup({
    one: new FormControl('', Validators.required),
    two: new FormControl('', Validators.required),
    additional: this.fb.group({
      one: ['', Validators.required],
      two: ['', Validators.required],
    }),
    dynamic: new FormArray([]),
  });

  public get dynamic() {
    return this.myForm.get('dynamic') as FormArray;
  }
  constructor(
    private fb: FormBuilder
  ) {}

  public addNewField() {
    this.dynamic.push(new FormControl('hello', Validators.required));
  }
  ngOnInit() {
  }

}
