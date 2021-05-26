import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/models';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  filteredMovies:Movie[]
  transform(movies: Movie[], searchText:string):Movie[]  {
   
   
    if (!searchText ||searchText == " ") return []
    searchText = searchText.toLocaleLowerCase();
    this.filteredMovies = movies.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });

   if (this.filteredMovies.length > 5 ){
     
    this.filteredMovies.length = 5 
    } 
   
    return this.filteredMovies
  }

}
