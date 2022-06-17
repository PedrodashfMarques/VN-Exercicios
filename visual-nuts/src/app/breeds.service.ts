import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  api: string = environment.API_endpoint;

  constructor(private myHttp: HttpClient) { }

  getBreeds(): Observable<any>{
    let url = this.api + "breeds";
    return this.myHttp.get(url);
  }
}
