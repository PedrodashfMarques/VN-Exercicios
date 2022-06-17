import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  api: string = environment.API_endpoint;

  constructor(private myHttp: HttpClient) { }

  getBreeds(): Observable<Object>{
    let url = this.api + "breeds";
    return this.myHttp.get(url);
  }

  getAllFacts(){
    let url = this.api + "facts";
    return this.myHttp.get(url);
  }


  getRandomFact(): Observable<Object>{
    let url = this.api + "fact";
    
    return this.myHttp.get(url);
  }


}
