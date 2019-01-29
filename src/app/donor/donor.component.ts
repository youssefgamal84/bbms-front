import { Component, OnInit, NgModule } from '@angular/core';
import { Donor } from './donor'
import { NgForm } from '@angular/forms'
import { DonorService } from '../donor.service';



@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
  public show: boolean = false;
  donorModel = new Donor('', '', 0, '', 0, '', '', '');
  sumbitted = false;
  success = null;
  errorMessage = null;
  errorMsg = '';
  constructor(private donorService: DonorService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.sumbitted = true;
    console.log(this.donorModel);
    this.donorService.addDonor(this.donorModel).subscribe(data => {
      this.success = true;
      this.errorMessage = null;
    }, error => {
      this.success = false;
      this.errorMessage = error.error.errorMessage;
    });
  }
  toggle() {
    this.show = !this.show;
  }
}
