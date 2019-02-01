import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { DonorService } from '../donor.service';
import { BagService } from '../bag.service';
import { UserService } from '../add-user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private job: number = null;
  private name: string = null;
  constructor(private authService: AuthenticateService, private donorService: DonorService, private bagService: BagService,
    private userService: UserService) { }

  ngOnInit() {
    this.job = this.authService._job;
    console.log("Job from serivce", this.job);
    this.authService.getJob().subscribe(job => {
      this.job = job;
      console.log(job);
    });
    this.authService.getName().subscribe(name => {
      this.name = name;
    });

    var token = this.authService.autoLogin();
    this.setAllServices(token);
  }

  logOut() {
    this.setAllServices(null);
  }

  setAllServices(token: string) {
    this.authService.setToken(token);
    this.bagService.setToken(token);
    this.donorService.setToken(token);
    this.userService.setToken(token);
  }

}
