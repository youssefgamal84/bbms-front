import { Component, OnInit } from '@angular/core';
import { Bag } from '../bag/bag';
import { BagService } from '../bag.service';

@Component({
  selector: 'app-bags',
  templateUrl: './expired-bags.component.html'
})
export class ExpiredBagsComponent implements OnInit {
  public cards: Bag[];
  constructor(private bagService: BagService) { }

  ngOnInit() {
    this.getBlood();
  }

  getBlood() {
    console.log("initiated getting blood bags");
    this.bagService.getBags("unsampled").subscribe(data => { this.cards = data; console.log(this.cards); },
      error => { console.log(error) });
  }

  deleteBag(id) {
    this.bagService.sampleBag(id).subscribe(data => {
      this.getBlood();
    }, error => { });
  }

}
