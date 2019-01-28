import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { LoginInfo } from '../LoginInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInfo: LoginInfo = new LoginInfo("", "");
  success = null;
  errorMessage = null;

  constructor(private authService: AuthenticateService) { }

  ngOnInit() {
    
    this.authService.getAuthStatusListener().subscribe(status => { this.success = status; })
  }

  onSubmit() {
    this.authService.login(this.loginInfo).subscribe(data => {
      console.log(data);
      this.success = true;
      this.errorMessage = null;
      this.authService.setToken(data.token);
      this.authService.setName(data.name);
      this.authService.setAuthStatus(true);
      this.authService.setJob(data.job);
    }, error => {
      console.log(error);
      this.success = false;
      this.errorMessage = error.error.errorMessage;
    });
  }

}
