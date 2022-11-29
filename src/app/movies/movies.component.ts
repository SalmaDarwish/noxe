import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
movieData:Movie[]=[]
x:any
pages:number[]=[]
searchList:any[]=[]
term:string=""

  constructor(private _api:ApiService, private _activatedRoute:ActivatedRoute) {
    this.pages=new Array(10).fill("").map((ele,index)=>index+1)


   }
 
  
  getMovie(pageCount:number){
    this._api.getPopular("movie",pageCount).subscribe({
      next:(res)=>{
        this.movieData=res.results
        console.log(res)

      }
    })
  }
  searchMovie(){
    if(this.term){
      this._api.search(this.term,"movie").subscribe({
      next:(res)=>{
        this.searchList=res.results
        console.log(this.searchList)
      }
    })
    }else{
      this.getMovie(1)
    }
    
  }


  ngOnInit(): void {
    this.term=""
    this.getMovie(1)
  }

}
