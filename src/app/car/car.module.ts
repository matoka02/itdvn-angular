import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarComponent } from './components/car/car.component';
import { UsersService } from '../users.service';

@NgModule({
  declarations: [CarComponent],
  imports: [
    CommonModule
  ],
  // providers: [UsersService],
})
export class CarModule { }
