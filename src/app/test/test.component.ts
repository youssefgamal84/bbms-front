import { Component, OnInit } from '@angular/core';
import { test } from './test'
import { BagService } from '../bag.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public show: boolean = false;
  testModel = new test('', 0, 0, 0, 0);
  sumbitted = false;
  errorMessage = null;
  success = null;
  constructor(private bagService: BagService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.sumbitted = true;
    console.log(this.testModel);
    /*this._donateservice.enroll(this.donorModel)
    .subscribe(
      data => console.log('success',data),
      error => console.error('error !', error)*/
    this.bagService.addTestResult(this.testModel, this.testModel.bid).subscribe(data => {
      this.success = true;
      this.errorMessage = null;
    }, error => {
      this.success = false;
      this.errorMessage = error.error.errorMessage;
    });;
  }
}
