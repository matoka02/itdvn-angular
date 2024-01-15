import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'itvdn-angular';
  show = false;

  parentValue = 'some text';
  onInputChange(event: Event){
    // @ts-ignore
    this.parentValue = event.target.value;
  }
}
