import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedsListComponent } from './breeds-list/breeds-list.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';
import { HeaderComponent } from './header/header.component';
import { RandomCatFactsComponent } from './random-cat-facts/random-cat-facts.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CatFactModalComponent } from './cat-fact-modal/cat-fact-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BreedsListComponent,
    BreedDetailComponent,
    HeaderComponent,
    RandomCatFactsComponent,
    CatFactModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
