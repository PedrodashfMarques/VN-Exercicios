import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedsListComponent } from './breeds-list/breeds-list.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BreedsListComponent,
    BreedDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
