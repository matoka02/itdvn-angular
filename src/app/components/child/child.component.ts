import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  // @Input() name = 'Child Counter Name';
  // @Input('step') stepCounter = 3;
  // @Input() counterValue = 0;
  // increment() {
  //   this.counterValue = this.counterValue + this.stepCounter
  // };

  // рефакторинг с интерполяцией
  @Input() name = 'Child Counter Name';
  @Input('step') stepCounter = 3;
  @Input() counterValue = 0;
  increment() {
    this.counterValue = this.counterValue + this.stepCounter;
    this.counterChange.emit(this.counterValue);
  };
  @Output() inputChange = new EventEmitter<string>();
  @Output() counterChange = new EventEmitter<number>();

  onInputChange(event: Event) {
    // @ts-ignore
    this.inputChange.emit(event.target.value)
  };

}
