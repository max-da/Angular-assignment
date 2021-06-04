import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/models';
import { GetDataService } from 'src/app/services/getDataService/get-data.service';
import { ShoppingcartService } from 'src/app/services/shoppingcartService/shoppingcart.service';
import{
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations"
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss'],
  animations: [
    trigger('openClose', [

      state('open', style({
        opacity:1,
        
      })),
      state('closed', style({
        opacity:0,
        height:0
      })),
      transition('open => closed', [
        animate('.2s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ],
})

export class ShoppingcartComponent implements OnInit {
  showCart: boolean = false;
  shoppingList: Movie[] = [];
  shoppingListEmpty:boolean = true;
  total:number = 0;
  totalItems:number = 0;
  totalPerMovie:number = 0;
 

  constructor(
    private service: ShoppingcartService,
    private dataService: GetDataService,
  
    
  ) {}
/* Lyssnar efter shoppinglist data, kollar också att shoppinglist finns ifall den behöver visa varukorg-tomt meddelande */
  ngOnInit(): void {
      
    this.dataService.shoppingList$.subscribe((data: Movie[]) => {
      this.shoppingList = data;
      this.calculateTotal()
  
      if (this.shoppingList && this.shoppingList.length == 0 ||!this.shoppingList){
        this.shoppingListEmpty = true;
        this.totalItems = 0;
      }
      else{
        this.shoppingListEmpty = false;
      }
    });
    this.dataService.getLs();
   
  

  }
  toggle(): void {
  
   
 
    this.showCart = !this.showCart

  }

  deleteFromCart(id: number): void {
    this.service.deleteFromCart(id);

    this.dataService.getLs();
   this.calculateTotal()
    if (this.shoppingList.length === 0) {
      this.showCart = false;
      this.shoppingListEmpty = true;
    }
  }

  decrementCart(id: number): void {
    
    this.service.decrementCart(id);

    this.dataService.getLs();
   this.calculateTotal()
    if (this.shoppingList.length === 0) {
      this.showCart = false;
      this.shoppingListEmpty = true;
    }
  }

  incrementCart(id: number): void {
    this.service.incrementCart(id);

    this.dataService.getLs();
   this.calculateTotal()
    if (this.shoppingList.length === 0) {
      this.showCart = false;
      this.shoppingListEmpty = true;
    }
  }

  calculateTotal(){
   
    if (this.shoppingList && this.shoppingList.length != 0){
      let calculatedArr = this.service.calculateTotal(this.shoppingList)
      this.total = calculatedArr[0];
      this.totalItems = calculatedArr[1];
    
    }
    else{
      this.total = 0;
      this.totalItems = 0;
    }
 

  }

  hideCart(){
    this.showCart = false;
  }
}
