import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SwebProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SwebProvider {
  url:string = 'https://swapi.co/api/';

  constructor(public http: HttpClient) {
    console.log('Hello SwebProvider Provider');
  }

  GetAllFilms(){
    console.log('GetAllFilms : '+ this.url+'films');
    return this.http.get(this.url+'films');
  }

  GetAllStarships(){
    console.log('GetAllStarships');
    return this.http.get(this.url+'starships')
  }

  GetAllVehicles(){
    console.log('GetAllVehicles');
    return this.http.get(this.url+'vehicles')
  }

  GetQuery(furl:string){
    console.log('GetQuery', furl);
    return this.http.get(furl)
  }

}
