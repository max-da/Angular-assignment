import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject , of} from 'rxjs';
import { Category } from 'src/app/models/categoryModel';
import { Movie } from 'src/app/models/models';
import { Order } from 'src/app/models/orderModel';


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
  private companyOrders = new Subject<Order[]>();
  $companyOrders = this.companyOrders.asObservable();
  private moviesByCat = new Subject<Movie[]>();
  $moviesByCat = this.moviesByCat.asObservable();


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


  getCompanyOrders(){
 return this.http
    .get<Order[]>(
      "https://medieinstitutet-wie-products.azurewebsites.net/api/orders/?companyId=298174"
              )
    .subscribe((data: Order[]) => {
      this.companyOrders.next(data);
    });

}
  deleteCompanyOrder(id:number){

 let url = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders/" + id
  return this.http.delete(url)/* .subscribe((data)=> {
     
   
    })   */

  }

  getMoviesByCat(movies:Movie[], id:number):any{
    
    let moviesByCat:Movie[] = []
    for (let i = 0; i < movies.length; i++){
      let index = movies[i]
      for (let i = 0; i < index.productCategory.length; i++){
        if (index.productCategory[i].categoryId == id){
         
          moviesByCat.push(index)
          this.moviesByCat.next(moviesByCat);
        }
      }
    }
  }
  




}

