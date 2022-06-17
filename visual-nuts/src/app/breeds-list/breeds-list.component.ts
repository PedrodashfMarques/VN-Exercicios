import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BreedsService } from '../breeds.service';
import { Breed } from '../shared/breed-model';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss']
})
export class BreedsListComponent implements OnInit, OnDestroy {

  breedsArray: Breed[] = [];

  private allSubscritions: Subscription = new Subscription();

  constructor(
    private myBreedsService: BreedsService,
    private myRouter: Router
    ) { }


  ngOnInit(): void {
    this.allSubscritions.add(this.myBreedsService.getBreeds().subscribe((data: Breed[]) => {
      // console.log(data["data"]);
      this.breedsArray = data["data"];

      console.log(this.breedsArray);
    }))
  }

  goToBreedDetail(breed: string){
    this.myRouter.navigate([`/breed-detail/${breed}`])
  }

  ngOnDestroy(): void {
    this.allSubscritions.unsubscribe();
  }

}
