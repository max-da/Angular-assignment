import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/models';
import { GetDataService } from 'src/app/services/getDataService/get-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private service: GetDataService) {}
  movies: Movie[] = [];

  ngOnInit(): void {
    this.service.movies$.subscribe((data: Movie[]) => {
      this.movies = data;
    });

    this.service.getData();
  }
}
