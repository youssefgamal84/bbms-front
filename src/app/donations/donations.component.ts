import { Component, OnInit } from '@angular/core';
import { donations } from './donations'

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  public show:boolean = false;
  donationsModel = new donations('','');
  sumbitted = false;
  errorMsg = '';
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    this.sumbitted = true;
    console.log(this.donationsModel);
    /*this._donateservice.enroll(this.donorModel)
    .subscribe(
      data => console.log('success',data),
      error => console.error('error !', error)*/
}

}
