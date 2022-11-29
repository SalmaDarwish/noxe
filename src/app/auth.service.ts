import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { TokenData } from './token-data';
import jwtDecode from 'jwt-decode';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData:BehaviorSubject<any>=new BehaviorSubject(null)
  constructor(private _httpClient:HttpClient , private _router:Router) {
    if(localStorage.getItem("token")){
      this.savedUser()
    }
   }

  savedUser(){
    let token=JSON.stringify(localStorage.getItem("token"));
    let decoded = jwtDecode(token);
    this.userData.next(decoded);
  }
  signUp(data:User):Observable<any>{
    return this._httpClient.post('https://routeegypt.herokuapp.com/signup',data)
  }
  signIn(data:User):Observable<any>{
    return this._httpClient.post('https://routeegypt.herokuapp.com/signin',data)
  }
  logOut(){
    localStorage.removeItem("token");
    this.userData.next(null);
    this._router.navigate(['./login'])
  }

}
