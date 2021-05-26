import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/models';

@Injectable({
  providedIn: 'root',
})
export class ShoppingcartService {
  constructor() {}

  shoppingList: Movie[] = [];
  movie:Movie
  pushToCart(myProduct: Movie): void {
      //myProduct = myProduct || undefined

    if (!localStorage.getItem('shoppingList')) {
      let shoppingList: Movie[] = [];
      shoppingList.push(myProduct);
      localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    } else {
      this.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
      this.shoppingList.push(myProduct);
      localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
    }
  }

  deleteFromCart(id:number):void{

    this.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));

    let index = this.shoppingList.findIndex((e)=>e.id == id)
  
    this.shoppingList.splice(index, 1)
    localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
  }
}
