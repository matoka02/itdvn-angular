import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/users.service';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  // providers: [UsersService],
})
export class CarComponent implements OnInit {
  constructor(private carService: CarService) { };

  carsWithOwners: any[] = [];

  ngOnInit(): void {
    this.carsWithOwners = this.carService.getCarsWithOwners()
  };
}
