import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/post.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  constructor(private postService: PostService, private userService: UserService) { };

  postList: any[] = [];

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => {
      console.log(value);
    });

    this.userService.getAllUsers().subscribe(value => {
      console.log(value, `USERS: ${Object.keys(value).length}`);
    });

    // this.userService.getUserById(3).subscribe(user => {
    //   console.log(user);
    // });

    this.userService.addUser({ id: 6, userName: 'Ihor', email: 'user6@gmail.com' },
    ).subscribe(value => {
      console.log('postMethod:', value);
    });
    this.userService.getAllUsers().subscribe(value => {
      console.log(value, `USERS: ${Object.keys(value).length}`);
    });

    this.userService.deleteUser(4).subscribe(value => {
      console.log('DELETE:', value);
    });
    this.userService.getAllUsers().subscribe(value => {
      console.log(value, `USERS: ${Object.keys(value).length}`);
    });
  };

  getPostById(id: number) {
    this.postService.getPostById(id).subscribe(value => {
      console.log(value);
    })
  };
}
