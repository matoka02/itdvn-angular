import { Injectable } from '@angular/core';

import { UsersService } from '../users.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class CarService {
  constructor(private userService: UsersService) { };

  cars = [
    { carName: 'Audi', owner: 'Max' },
    { carName: 'BMW', owner: 'Anna' },
    { carName: 'Volvo', owner: 'Eduard' },
    { carName: 'Mercedes', owner: 'Peteri' },
  ];

  getCarsWithOwners() {
    return this.cars.filter(car => {
      this.userService.getUsers().find(user => user.userName === car.owner)
    })
  };
}
