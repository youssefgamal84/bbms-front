import { Component, OnInit } from '@angular/core';
import { Bag } from '../bag/bag';
import { BagService } from '../bag.service';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {
  public cards: Bag[];
  constructor(private bagService: BagService) { }

  ngOnInit() {
    this.getBlood("A");
  }

  getBlood(type) {
    console.log("initiated getting blood bags", type);
    this.bagService.getBags(type).subscribe(data => { this.cards = data; console.log(this.cards); },
      error => { console.log(error) });
  }

  deleteBag(id,type){
    this.bagService.deleteBag(id).subscribe(data=>{
      this.getBlood(type);
    },error=>{});
  }

}
