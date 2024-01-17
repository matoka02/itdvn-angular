import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { };

  private isAuth = false;

  logIn() {
    this.isAuth = true;
  };

  logOut() {
    this.isAuth = false;
  };

  isLoggedIn() {
    return of(this.isAuth).pipe(delay(2000))
  };
}
