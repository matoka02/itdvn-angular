import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'itvdn-angular';

  // директивы

  // isAdmin: boolean = true;
  // changeAdminStatus(){
  //   this.isAdmin = !this.isAdmin;
  // };

  // users = [
  //   { userName: 'Andrii', age: 21 },
  //   { userName: 'Anna', age: 25 },
  //   { userName: 'Max', age: 19 },
  // ];

  // car = 'Audi';

  // elementStyle = {
  //   color: '#BE3455',
  //   opacity: 0.5
  // };
  // isAdmin: boolean = false;
  // arrayOfClasses = ['red', 'bold'];


  // пайпы
  currentDate = new Date();
  users = [
    { userName: 'Andrii', age: 21 },
    { userName: 'Anna', age: 25 },
    { userName: 'Max', age: 19 },
  ];
}
