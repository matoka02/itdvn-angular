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
} from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.scss'
})
export class GrandChildComponent implements OnInit, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  constructor() {
    console.log('GRAND_CHILD_Child Constructor: ', this.value);
  };

  @Input() value = '';

  ngOnInit() {
    console.log('GRAND_CHILD_ngOnInit: ', this.value);
  };
  ngOnDestroy() {
    console.log('GRAND_CHILD_ngOnDestroy: ', this.value);
  };

  ngOnChanges(changes: SimpleChanges) {
    console.log('GRAND_CHILD_changes: ', changes);
    console.log('GRAND_CHILD_ngOnChanges: ', this.value);
  };
  ngDoCheck(): void {
    console.log('GRAND_CHILD_ngDoCheck: ', this.value);
  };

  ngAfterViewInit(): void {
    console.log('GRAND_CHILD_AfterViewInit: ', this.value);
  };

  ngAfterViewChecked(): void {
    console.log('GRAND_CHILD_AfterViewChecked: ', this.value);
  };

  ngAfterContentInit(): void {
    console.log('GRAND_CHILD_AfterContentInit: ', this.value);
  };
  ngAfterContentChecked(): void {
    console.log('GRAND_CHILD_AfterContentChecked: ', this.value);
  };
}


