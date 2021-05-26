import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject , of} from 'rxjs';
import { Category } from 'src/app/models/categoryModel';
import { Movie } from 'src/app/models/models';


@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}
  
  private movies = new Subject<Movie[]>();
  movies$ = this.movies.asObservable();
  private shoppingList = new Subject<Movie[]>();
  shoppingList$ = this.shoppingList.asObservable();
  private categories = new Subject<Category[]>();
  categories$ = this.categories.asObservable();
  private searchTerm = new Subject<string>();
  searchTerm$ = this.searchTerm.asObservable();

  getData(): void {
    if (!localStorage.getItem('movies')) {
      this.http
        .get<Movie[]>(
          'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
        )
        .subscribe((data: Movie[]) => {
          this.movies.next(data);
          localStorage.setItem('movies', JSON.stringify(data));
        });
    } else {
      this.movies.next(JSON.parse(localStorage.getItem('movies')));
    }
  }

  getMovieId(movieId: number): Movie {
    let movies: Movie[] = JSON.parse(localStorage.getItem('movies'));
    return movies.filter((movie) => movie.id == movieId)[0];
  }


  getLs(){
    this.shoppingList.next(JSON.parse(localStorage.getItem("shoppingList")))
  }

  getCategory(){
    if (!localStorage.getItem('categories')) {
      this.http
        .get<Category[]>(
          "https://medieinstitutet-wie-products.azurewebsites.net/api/categories"
                  )
        .subscribe((data: Category[]) => {
          this.categories.next(data);
          localStorage.setItem('categories', JSON.stringify(data));
        });
    } else {
      this.categories.next(JSON.parse(localStorage.getItem('categories')));
    }


}

  handleSearchTerm():any{
      return  of (this.searchTerm$)
  }
}