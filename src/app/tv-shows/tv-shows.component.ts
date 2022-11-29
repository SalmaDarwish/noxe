import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
tvData:any[]=[];
pages:number[]=[];
searchList:any[]=[]
term:string=""


  constructor(private _api:ApiService, private _activatedRoute:ActivatedRoute) {
    this.pages=new Array(10).fill("").map((ele,index)=>index+1)

  }
  

  getTv(pageCount:number){
    this._api.getPopular("tv",pageCount).subscribe({
      next:(res)=>{
        this.tvData=res.results
        console.log(this.tvData)

      }
    })
  }
  searchTv(){
    if(this.term){
      this._api.search(this.term,"tv").subscribe({
      next:(res)=>{
        this.searchList=res.results
        console.log(this.searchList)
      }
    })
    }else{
      this.getTv(1)
    }
    
  }

  ngOnInit(): void {
    this.term=""
    this.getTv(1)
  }

}