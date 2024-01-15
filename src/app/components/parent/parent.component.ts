import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ViewChild } from '@angular/core';

import { ChildComponent } from './../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  // startCount = 3;
  // parentStepValue = 5;
  // parentName = 'Parent Name'
  // parentCounter = 100;

  // // рефакторинг с интерполяцией
  // startCount = 3;
  // parentStepValue = 5;
  // parentName = 'Parent Name'
  // parentCounter = 100;
  // handleInputChange(str: string){
  //   this.parentName = str;
  // };
  // handleChildCounterChange(num:number){
  //   this.parentCounter = num;
  // };

  // // переменные шаблона @ViewChild
  // @ViewChild('child') childComponent: ChildComponent | undefined;
  // changeChildColor(){
  //   this.childComponent?.changeColor();
  // };

  // currentText = 'Default Text';
  // @ViewChild('parentInput') inputValue: ElementRef | undefined;
  // updateText(){
  //   this.currentText = this.inputValue?.nativeElement.value
  // };
  // takeFocus(){
  //   this.inputValue?.nativeElement.focus()
  // };

  // переменные шаблона @ViewChildren

  // @ViewChildren('child') childList: QueryList<ChildComponent> | undefined;
  // changeColor() {
  //   this.childList?.forEach(comp => comp.childColorChange())
  // };

  
}
