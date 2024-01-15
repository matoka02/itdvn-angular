import { Injectable } from '@angular/core';

import { FlowersComponent } from './components/flowers/flowers.component';

// @Injectable({
// providedIn: 'root',
// })

// @Injectable({
// providedIn: FlowersComponent
// })

@Injectable()
export class UsersService {
  constructor() { };

  private users = [
    { userName: 'Max', age: 21 },
    { userName: 'Andrew', age: 23 },
    { userName: 'Anna', age: 33 },
    { userName: 'Victor', age: 17 },
    { userName: 'Anastasiia', age: 34 },
    { userName: 'Ihor', age: 18 },
    { userName: 'Dmitrii', age: 25 },
  ];

  getUsers() {
    return this.users
  };
}
