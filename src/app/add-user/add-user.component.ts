import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {
  private userModel = new User('', '', '', null, null, '');
  private passwordConfirm: string = '';
  success: boolean = false;
  errorMessage: string = null;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.passwordConfirm != this.userModel.password) {
      this.success = false;
      this.errorMessage = "Passwords must match";
      return;
    }
    this.userService.addUser(this.userModel).subscribe(data => {
      this.success = true;
      this.errorMessage = null;
    }, error => {
      this.success = false;
      console.log(error);
      this.errorMessage = error.error.errorMessage;
    });
  }

}
