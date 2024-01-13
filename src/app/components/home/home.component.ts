import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  interpolation: string = 'some text';

  isBlue = false;
  interpolation2: string = 'some text';
  toggleColor(){
    this.isBlue = !this.isBlue;
  }
}
