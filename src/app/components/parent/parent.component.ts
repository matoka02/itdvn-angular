import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  startCount = 3;
  parentStepValue = 5;
  parentName = 'Parent Name'
  parentCounter = 100;

  // рефакторинг с интерполяцией
  handleInputChange(str: string){
    this.parentName = str;
  };
  handleChildCounterChange(num:number){
    this.parentCounter = num;
  }
}
