import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
peopleData:Movie[]=[]
pages:number[]=[]
searchList:any[]=[]
term:string=""
  constructor(private _api:ApiService) {

    this.pages=new Array(10).fill("").map((ele,index)=>index+1)
   }
  getPeople(pageCount:number){
    this._api.getPopular("person",pageCount).subscribe({
      next:(res)=>{
        this.peopleData=res.results
        console.log(this.peopleData)

      }
    })
  }
  searchPeople(){
    if(this.term){
      this._api.search(this.term,"person").subscribe({
      next:(res)=>{
        this.searchList=res.results
        console.log(this.searchList)
      }
    })
    }else{
      this.getPeople(1)
    }
    
  }
  ngOnInit(): void {
    this.term=""
    this.getPeople(1)
  }

}