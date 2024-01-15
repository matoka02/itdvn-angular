import { Component } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.scss'
})
export class GrandChildComponent {
  isRed = false;
  changeColor(){
    this.isRed = !this.isRed
  };
}
