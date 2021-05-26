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
  constructor(
    private service: ShoppingcartService,
    private dataService: GetDataService
  ) {}

  ngOnInit(): void {
    // this.shoppingList = JSON.parse(localStorage.getItem("shoppingList"))
    this.dataService.shoppingList$.subscribe((data: Movie[]) => {
      this.shoppingList = data;
    });
    this.dataService.getLs();
    console.log(this.shoppingList);
  }
  toggle(): void {
    this.dataService.getLs();
    console.log(this.shoppingList.length);
    if (this.showCart == true) {
      this.showCart = false;
    } else if (this.showCart == false && this.shoppingList.length !== 0) {
      this.showCart = true;
    }
  }
  deleteFromCart(id: number): void {
    this.service.deleteFromCart(id);

    this.dataService.getLs();
    if (this.shoppingList.length === 0) {
      this.showCart = false;
    }
  }
}
