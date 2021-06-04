import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/models/orderModel';
import { GetDataService } from 'src/app/services/getDataService/get-data.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private service: GetDataService) {}
  /* Lyssnar efter companyorders */
  companyOrders: Order[] = [];
  ngOnInit(): void {
    this.service.$companyOrders.subscribe((data) => {
      this.companyOrders = data;
    });
    this.service.getCompanyOrders();
  }
  /* Lyssnar på anropet från delete, när det är klart lysnar den efter förändringen i companyorders */
  deleteOrder(id: number) {
    this.service.deleteCompanyOrder(id).subscribe(() => {
      this.service.$companyOrders.subscribe((orders) => {
        this.companyOrders = orders;
      });
      this.service.getCompanyOrders();
    });

 
  }
}
