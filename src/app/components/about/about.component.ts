import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  count = 0;
  handleClick(event: Event) {
    console.log('event: ', event);                    // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    console.log('event.target: ', event.target);      // <button _ngcontent-ng-c3455007371>Increase count</button>
    this.count++;
  }
};
