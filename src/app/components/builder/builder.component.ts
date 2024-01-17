import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AgeValidator } from './custom.validator';
import { UserNameValidator } from './async.validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.form = this.formBuilder.group({
      // login: '',
      login: ['', Validators.required, [UserNameValidator.createValidator(this.userService)] ],
      email: [null, [Validators.required, Validators.email]],
      age: [null, [Validators.required, AgeValidator]]
    });
  };

  isDisabled = true;

  handleSubmit() {
    this.isDisabled = false;
  };

  setNewLogin() {
    // this.form.setValue({ login: 'Alex', email: '123' });
    // this.form.patchValue({ login: 'Alex' });
    this.form.patchValue({ login: 'Alex' }, { emitEvent: false });
  };

  // ngOnInit(): void {
  //   this.form.valueChanges.subscribe(value => {
  //     console.log(value);
  //   })
  // };

  // динамичное изменение email в зависимости от login
  ngOnInit(): void {
    this.form.get('login')?.valueChanges.subscribe(loginValue => {
      this.form.get('email')?.setValue(`${loginValue}@example.com`)
    })
  }
}
