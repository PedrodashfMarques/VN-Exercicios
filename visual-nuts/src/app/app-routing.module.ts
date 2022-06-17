import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';
import { BreedsListComponent } from './breeds-list/breeds-list.component';
import { RandomCatFactsComponent } from './random-cat-facts/random-cat-facts.component';

const routes: Routes = [
  {path: 'breeds', component: BreedsListComponent},
  {path: 'breed-detail/:breed', component: BreedDetailComponent},
  {path: 'random-cat-facts', component: RandomCatFactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
