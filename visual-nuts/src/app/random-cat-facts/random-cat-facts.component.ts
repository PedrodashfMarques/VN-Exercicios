import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreedsService } from '../breeds.service';

@Component({
  selector: 'app-random-cat-facts',
  templateUrl: './random-cat-facts.component.html',
  styleUrls: ['./random-cat-facts.component.scss']
})
export class RandomCatFactsComponent implements OnInit, OnDestroy {

  factsArray = [];

  private allSubscritions: Subscription = new Subscription();

  constructor(private myBreedsService: BreedsService) { }

  ngOnInit(): void {
    this.allSubscritions.add(this.myBreedsService.getAllFacts().subscribe(data => {
      console.log(data["data"]);

      this.factsArray = data["data"];
      
    }))
  }

  ngOnDestroy(): void {
    this.allSubscritions.unsubscribe();
  }

}
