import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  MyService(){
   return console.log('Hellow');
  }

  // tslint:disable-next-line:typedef
   GetBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
