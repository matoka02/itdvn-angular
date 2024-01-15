import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent implements OnInit {
  constructor(private userService: UsersService) { };

  usersList: any[] = [];

  ngOnInit(): void {
    this.usersList = this.userService.getUsers();
  };

}
