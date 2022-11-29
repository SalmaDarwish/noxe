import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient) { }

  getTrending(type:string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=58cffe04804dbf26bd1f9f2590bb78e1&language=en-US`)

  }
  getDetails(id:string,type:string="tv"):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=58cffe04804dbf26bd1f9f2590bb78e1&language=en-US`)
  }
  getPopular(type:string,pageCount:number):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=58cffe04804dbf26bd1f9f2590bb78e1&language=en-US&page=${pageCount}`)
  }
  search(term:string,type:string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/search/${type}?api_key=58cffe04804dbf26bd1f9f2590bb78e1&page=1&query=${term}&include_adult=true`)

  }

}
