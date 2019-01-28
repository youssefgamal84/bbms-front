import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private job: number = null;
  constructor(private authService: AuthenticateService) { }

  ngOnInit() {
    this.job = this.authService._job;
    console.log("Job from serivce", this.job);
    this.authService.getJob().subscribe(job => {
      this.job = job;
      console.log(job);
    });
  }

}
