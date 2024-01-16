import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
  // двустороннее связывание
  // car = {
  //   carName: 'Mazda',
  //   year: 2007
  // }

  // формы
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      agree: new FormControl(false, Validators.requiredTrue),
      name: new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
      }),
    })
  };

  onSubmit(){
    this.loginForm.reset()
  };
}
