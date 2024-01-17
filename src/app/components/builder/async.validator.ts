import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

import { UserService } from '../user.service';


export class UserNameValidator {
  static createValidator(userService: UserService): AsyncValidatorFn | null {
    return (control: AbstractControl): Observable<ValidationErrors> | null => {
      return userService.checkIfUserNamesExist(control.value).pipe(
        map((result: boolean) => {
          return result ? { userNameExist: true } : null
        })
      )
    }
  }
}
