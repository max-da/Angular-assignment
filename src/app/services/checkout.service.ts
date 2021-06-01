import { Injectable } from '@angular/core';
import { Order } from '../models/orderModel';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  order:Order;
  constructor(
    private http: HttpClient
  ) { }


  sendOrder(order:Order){
   
    
    return this.http.post<Order>("https://medieinstitutet-wie-products.azurewebsites.net/api/Orders/", order)
    .subscribe((data: Order) => {
    console.log(data)
   
  
    }) 
    
  }
}
