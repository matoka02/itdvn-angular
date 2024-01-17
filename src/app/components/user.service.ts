import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { };

  private existingUserNames = ['admin', 'student', 'teacher'];

  checkIfUserNamesExist(value: string) {
    return of(this.existingUserNames.some((a) => a === value)).pipe(delay(2000))
  }
}
