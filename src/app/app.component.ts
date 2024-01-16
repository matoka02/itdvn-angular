import { Component } from '@angular/core';
import { filter, interval, map, take, of } from 'rxjs';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'itvdn-angular';

  constructor(private dataService: DataService) { };

  isDisabled = false;

  people = [
    { candidateName: 'Max', exp: 1 },
    { candidateName: 'Andrew', exp: 2 },
    { candidateName: 'Anna', exp: 3 },
    { candidateName: 'Victor', exp: 3 },
    { candidateName: 'Pavel', exp: 4 },
  ];
  candidates: any[] = [];

  startInterval() {
    this.isDisabled = true;
    interval(1000).pipe(
      take(this.people.length),
      filter(index => this.people[index].exp >= 3),
      map(index => this.people[index].candidateName)
    ).subscribe(resp => {
      this.candidates.push(resp)
    }, null, () => this.isDisabled = false)
  };

  stream$ = of(1, 2, 3, 4, 5);

  logStream() {
    this.stream$.subscribe(value => console.log(value))
  };

  logDataFromService() {
    this.dataService.getData().subscribe(value => {
      console.log(value);
    })
  };

}
