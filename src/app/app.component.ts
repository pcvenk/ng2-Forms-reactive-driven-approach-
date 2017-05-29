import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsers: ['Max', 'Maximilian'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  addHobbies() {
    const control = new FormControl(null, Validators.required);

    // the array has to be explicitly casted to work
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  //
  // forbiddenNames(control: FormControl): {[s: string]: boolean} {
  //
  //   // if (this.forbiddenUsers.indexOf(control.value) !== -1) {
  //   //   return {'nameIsForbidden': true};
  //   // }
  //   // return null;
  // }
}
