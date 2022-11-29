import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
allMovies:Movie[]=[]
allTv:Movie[]=[]
allPeople:Movie[]=[]
pages:number[]=[]
  constructor(private _api:ApiService) {
    this.pages=new Array(10).fill("").map((ele,index)=>index+1)

   }

  ngOnInit(): void {
    this._api.getTrending("movie").subscribe({
      next:(data:any)=>{
        this.allMovies=data.results.splice(0,10)
        console.log(this.allMovies)
      }
    })
    this._api.getTrending("tv").subscribe({
      next:(data:any)=>{
        this.allTv=data.results.splice(0,10)
        console.log(this.allTv)
      }
    })
    this._api.getTrending("person").subscribe({
      next:(data:any)=>{
        this.allPeople=data.results.splice(0,10)
        console.log(this.allPeople)
      }
    })
  }

}
