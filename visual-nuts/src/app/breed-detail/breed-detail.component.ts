import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BreedsService } from '../breeds.service';
import { Breed } from '../shared/breed-model';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: ['./breed-detail.component.scss']
})
export class BreedDetailComponent implements OnInit, OnDestroy {

  isLoading: boolean = false;

  breedSearchedURL: string;

  breedDetails: Breed;

  randomFact: string;

  modalAbertoFrom: boolean = false;

  private allSubscritions: Subscription = new Subscription();

  constructor(
    private myBreedsService: BreedsService,
    private myActiveRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.breedSearchedURL = this.myActiveRoute.snapshot.params["breed"];
      // console.log(this.breedSearchedURL);
 
    this.allSubscritions.add(this.myBreedsService.getBreeds().subscribe((data: Breed[]) => {
      let breedFound = data["data"].find(row => row.breed === this.breedSearchedURL);
      // console.log(breedFound);
      this.breedDetails = breedFound;
      setTimeout(() => {
      this.isLoading = false;
        
      }, 500);

    }))

  }

  generateFact(){
    this.randomFact = "";
    this.modalAbertoFrom = !this.modalAbertoFrom;

    this.allSubscritions.add(this.myBreedsService.getRandomFact().subscribe(data => {
      this.randomFact = data["fact"];
      // this.myBreedsService.randomCatFact.next(data["fact"]);
    }))
  }

  fecharModal(){
    this.modalAbertoFrom = null;
  }

  ngOnDestroy(): void {
    this.allSubscritions.unsubscribe();
  }

}
