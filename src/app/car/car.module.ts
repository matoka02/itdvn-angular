import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarComponent } from './components/car/car.component';
import { UsersService } from '../users.service';
import { CarService } from './car.service';

@NgModule({
  declarations: [CarComponent],
  imports: [
    CommonModule
  ],
  // providers: [UsersService],
  providers: [CarService]
})
export class CarModule { }
