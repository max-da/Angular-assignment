import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/models';
import { GetDataService } from 'src/app/services/getDataService/get-data.service';

@Component({
  selector: 'app-category-by-id',
  templateUrl: './category-by-id.component.html',
  styleUrls: ['./category-by-id.component.scss'],
})
export class CategoryByIdComponent implements OnInit {
  constructor(private service: GetDataService, private route: ActivatedRoute) {}
  movies: Movie[] = [];
  moviesByCat: Movie[] = [];
  id: number = 0;

  ngOnInit(): void {
    this.service.movies$.subscribe((data: Movie[]) => {
      this.movies = data;
    });
    this.service.getData();

    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));
      console.log(this.id);

      this.service.$moviesByCat.subscribe((data: Movie[]) => {
        this.moviesByCat = data;
      });
      this.getMoviesByCat();
    });

  
  }
  getMoviesByCat() {
    this.service.getMoviesByCat(this.movies, this.id);
  }
}
