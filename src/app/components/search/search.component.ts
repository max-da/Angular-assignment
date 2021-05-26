import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/models';
import { GetDataService } from 'src/app/services/getDataService/get-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText:string="";
  constructor(
    private service:GetDataService
  ) { }
  
    movies:Movie[]=[];

  ngOnInit(): void {
    this.service.movies$.subscribe((data:Movie[])=>{
      this.movies = data;
    })
   this.service.getData();  
  }

 



}


