import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/getDataService/get-data.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss'],
})
export class OrderSuccessComponent implements OnInit {
  constructor(private service: GetDataService) {}

  ngOnInit(): void {
    localStorage.removeItem('shoppingList');
    localStorage.removeItem('orderRows');
    this.service.getLs();
  }
}
