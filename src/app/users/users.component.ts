import { Component, OnInit } from '@angular/core';
import { User } from '../add-user/user';
import { UserService } from '../add-user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.error(error);
    })
  }

}
