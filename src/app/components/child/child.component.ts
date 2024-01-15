import { Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { GrandChildComponent } from '../grand-child/grand-child.component';

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
  // @Input() name = 'Child Counter Name';
  // @Input('step') stepCounter = 3;
  // @Input() counterValue = 0;
  // increment() {
  //   this.counterValue = this.counterValue + this.stepCounter;
  //   this.counterChange.emit(this.counterValue);
  // };
  // @Output() inputChange = new EventEmitter<string>();
  // @Output() counterChange = new EventEmitter<number>();

  // onInputChange(event: Event) {
  //   // @ts-ignore
  //   this.inputChange.emit(event.target.value)
  // };

  // переменные шаблона @ViewChild
  // isRed = false;
  // changeColor(){
  //   this.isRed = !this.isRed
  // };

  // переменные шаблона @ViewChildren
  // isRed = false;
  // childColorChange(){
  //   this.isRed = !this.isRed
  // };

  // переменные шаблона @ContentChild
  // @ContentChild('elem') elem: ElementRef | undefined;
  // changeText(){
  //   if (this.elem) this.elem.nativeElement.innerHTML = 'Changed from Content Child';
  // };

  // переменные шаблона @ContentChildren
  // @ContentChildren(GrandChildComponent) grandChild: QueryList<GrandChildComponent> | undefined;
  // changeGrandChildColor() {
  //   this.grandChild?.forEach(grandChild => grandChild.changeColor())
  // };
}

