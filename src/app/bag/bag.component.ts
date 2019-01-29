import { Component, OnInit } from '@angular/core';
import { Bag } from './bag'
import { BagService } from '../bag.service';
@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  bagModel = new Bag('', '', 0, 0, '', '');
  sumbitted = false;
  errorMsg = '';
  success = null;
  errorMessage = null;

  constructor(private bagSerive: BagService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.sumbitted = true;
    console.log(this.bagModel);
    this.bagSerive.addBag(this.bagModel).subscribe(data => {
      this.success = true;
      this.errorMessage = null;
    }, error => {
      this.success = false;
      this.errorMessage = error.error.errorMessage;
    });

  }
}
