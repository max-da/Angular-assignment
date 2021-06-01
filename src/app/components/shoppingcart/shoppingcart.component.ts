import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/models';
import { GetDataService } from 'src/app/services/getDataService/get-data.service';
import { ShoppingcartService } from 'src/app/services/shoppingcartService/shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss'],
})
export class ShoppingcartComponent implements OnInit {
  showCart: boolean = false;
  shoppingList: Movie[] = [];
  shoppingListEmpty:boolean = true;
  priceArray:number[]=[];
  total:number = 0;
  totalItems:number = 0;


  constructor(
    private service: ShoppingcartService,
    private dataService: GetDataService
  ) {}

  ngOnInit(): void {
    this.dataService.shoppingList$.subscribe((data: Movie[]) => {
      this.shoppingList = data;
      this.calculateTotal()
  
      if (this.shoppingList.length == 0){
        this.shoppingListEmpty = true;
      }
      else{
        this.shoppingListEmpty = false;
      }
    });
    this.dataService.getLs();
   
  

  }
  toggle(): void {
  
    //this.dataService.getLs();
 
    
    if (this.showCart == true) {
    
      this.showCart = false;
    } else  {
      this.showCart = true;
     
    }

  }

  deleteFromCart(id: number): void {
    this.service.deleteFromCart(id);

    this.dataService.getLs();
   this.calculateTotal()
    if (this.shoppingList.length === 0) {
      this.showCart = false;
    }
  }

  calculateTotal(){
   
    if (this.shoppingList.length != 0){
      let calculatedArr = this.service.calculateTotal(this.shoppingList)
      this.total = calculatedArr[0];
      this.totalItems = calculatedArr[1];
    }
 

  }


}
