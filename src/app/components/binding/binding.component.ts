import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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

  // regexp = /\+38\(0[0-9]{2}\)-[0-9]{3}-\d{2}-\d{2}/
  regexp = '';

  isAuthorized = false;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      // agree: new FormControl(false, Validators.requiredTrue),
      // name: new FormGroup({
      //   firstName: new FormControl(''),
      //   lastName: new FormControl(''),
      // }),
      contacts: new FormArray([new FormControl('+38(0', [Validators.pattern(this.regexp), Validators.required])]),
    })
  };

  // onSubmit() {
  //   this.loginForm.reset()
  // };

  onSubmit() {
    this.isAuthorized = true;
    this.loginForm.reset();
    this.createNewControl();
  };

  createNewControl(){
    this.loginForm.addControl('subscribe', new FormControl(false));
    this.loginForm.get('subscribe')?.setValidators(Validators.required);
  };

  get getContacts(): FormArray {
    return this.loginForm.get('contacts') as FormArray
  };

  addPhone() {
    this.getContacts.push(new FormControl('+38(0', [Validators.pattern(this.regexp), Validators.required]))
  };

  clearPhones() {
    this.getContacts.controls.splice(1);
  };


}
