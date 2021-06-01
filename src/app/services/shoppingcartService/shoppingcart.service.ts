import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/models';
import { orderRow } from 'src/app/models/orderRowsModel';

@Injectable({
  providedIn: 'root',
})
export class ShoppingcartService {
  constructor() {}

  shoppingList: Movie[] = [];
  movie:Movie
  totalArray: number[] = [];
  orderRows: orderRow[] = [];

  pushToCart(myProduct: Movie): void {

  this.movie = myProduct;

  if (!localStorage.getItem('shoppingList')) {
    let shoppingList: Movie[] = [];
    let orderRows: orderRow[] = [];
    shoppingList.push(myProduct);
    orderRows.push(new orderRow(
      myProduct.id,
      myProduct.amount
    ))
    localStorage.setItem("orderRows", JSON.stringify(orderRows))
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  } else {

    this.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
    this.orderRows = JSON.parse(localStorage.getItem("orderRows"))
    let indexO = this.orderRows.findIndex((e)=> e.productId == this.movie.id)
    let index = this.shoppingList.findIndex((e)=> e.id == this.movie.id);
    if (index != -1){
      this.shoppingList[index].amount++
      this.orderRows[indexO].amount++
    }
    else{
      this.shoppingList.push(myProduct);
      this.orderRows.push(new orderRow(
        myProduct.id,
        myProduct.amount
      ))
    }
    localStorage.setItem("orderRows", JSON.stringify(this.orderRows))
    localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
  }

  }
  deleteFromCart(id:number):void{

    this.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
    let indexO = this.orderRows.findIndex((e)=> e.productId == id)
    this.orderRows = JSON.parse(localStorage.getItem("orderRows"))
    let index = this.shoppingList.findIndex((e)=>e.id == id)
    if (this.shoppingList[index].amount != 1){
      this.shoppingList[index].amount--
      this.orderRows[indexO].amount--
    }
    else{
      this.shoppingList.splice(index, 1)
      this.orderRows.splice(indexO, 1)
    }
    localStorage.setItem("orderRows", JSON.stringify(this.orderRows))
    localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));

  }
  calculateTotal(shoppingList:Movie[]):[number,number]{
    let total = 0;
    let totalItems = 0;
    for (let i = 0; i < shoppingList.length; i++){
  
      let index = shoppingList[i]
      let movieTotal = index.amount * index.price;
      total = total + movieTotal;
      console.log(total)
      totalItems += index.amount
  
  
    }
    return [total,totalItems]
  }





}



    /* this.movie = myProduct
    if (!localStorage.getItem('shoppingList')) {
      let shoppingList: Movie[] = [];
      shoppingList.push(myProduct);
      localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    } else {
      this.shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
      this.shoppingList.push(myProduct);
      localStorage.setItem('shoppingList', JSON.stringify(this.shoppingList));
    }

    if (!localStorage.getItem("orderRows") ){
     let orderRows: orderRow[] = [];
      orderRows.push(new orderRow(
        myProduct.id,
        //myProduct.name,
        1,
      

      )
      )
      localStorage.setItem("orderRows", JSON.stringify(orderRows))
    }
    else{
      let orderRows = JSON.parse(localStorage.getItem("orderRows"))

    
     let oIndex = orderRows.findIndex((e)=> e.productId == myProduct.id)
     if (oIndex != -1){
      orderRows[oIndex].amount++
      localStorage.setItem("orderRows",JSON.stringify(orderRows))
     }
     else{
       orderRows.push(new orderRow(
         myProduct.id,
         //myProduct.name,
         1,
        
       ))
       localStorage.setItem("orderRows",JSON.stringify(orderRows))
     }
 
   
  } */