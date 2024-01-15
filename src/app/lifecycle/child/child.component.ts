import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  @ViewChild(GrandChildComponent) grandChild: GrandChildComponent | undefined;

  constructor() {
    console.log(this.grandChild, 'GRAND_CHILD');
    console.log('Child Constructor: ', this.value);
  };

  @Input() value = '';

  ngOnInit() {
    console.log(this.grandChild, 'GRAND_CHILD');
    console.log('ngOnInit: ', this.value);
  };
  ngOnDestroy() {
    console.log(this.grandChild, 'GRAND_CHILD');
    console.log('ngOnDestroy: ', this.value);
  };

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.grandChild, 'GRAND_CHILD');
    console.log('changes: ', changes);
    console.log('ngOnChanges: ', this.value);
  };
  ngDoCheck(): void {
    console.log(this.grandChild, 'GRAND_CHILD');
    console.log('ngDoCheck: ', this.value);
  };

  ngAfterViewInit(): void {
    console.log(this.grandChild, 'GRAND_CHILD');
    console.log('AfterViewInit: ', this.value);
  };

  ngAfterViewChecked(): void {
    console.log(this.grandChild, 'GRAND_CHILD');
    console.log('AfterViewChecked: ', this.value);
  };

  ngAfterContentInit(): void {
    console.log(this.grandChild, 'GRAND_CHILD');
    console.log('AfterContentInit: ', this.value);
  };
  ngAfterContentChecked(): void {
    console.log(this.grandChild, 'GRAND_CHILD');
    console.log('AfterContentChecked: ', this.value);
  };
}
