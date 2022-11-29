import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
userName:string=""
  isLogin:boolean=false;
  constructor(private _auth:AuthService) { 
  
  }

  ngOnInit(): void {
   this._auth.userData.subscribe({
    next:(data:any)=>{
      if(this._auth.userData.getValue()){
        this.isLogin=true;
        this.userName=data.first_name
      }else{
        this.isLogin=false;
      }

    }
   })
  }
  logOut(){
    this._auth.logOut()
  }

}
