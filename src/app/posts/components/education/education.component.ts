import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  // инкапсуляция стилей по умолчанию включена
  encapsulation: ViewEncapsulation.Emulated
  // инкапсуляция стилей выключена, стили глобальны
  // encapsulation: ViewEncapsulation.None
})
export class EducationComponent {

}
