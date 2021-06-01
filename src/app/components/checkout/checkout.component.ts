
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/models';
import { Order } from 'src/app/models/orderModel';
import { orderRow } from 'src/app/models/orderRowsModel';
import { CheckoutService } from 'src/app/services/checkout.service';
import { GetDataService } from 'src/app/services/getDataService/get-data.service';
import { ShoppingcartService } from 'src/app/services/shoppingcartService/shoppingcart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  
  shoppingList:Movie[] =[];
  priceArray:number[] = []
  total:number;
  idArray:number[] = [];
  constructor(
    private fb:FormBuilder,
    private service:GetDataService,
    private checkoutService:CheckoutService,
    private shopService:ShoppingcartService
  ) { }

  ngOnInit(): void {
    this.service.shoppingList$.subscribe((data:Movie[]) => {
      this.shoppingList = data;
      console.log(this.shoppingList)

    });
    this.service.getLs()
  
  }

  customerForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(2)]],
    lastName:["" ,[Validators.required, Validators.minLength(2)]],
    paymentMethod:["",[Validators.required]],
    

  })

  onSubmit(){
  
    let date = new Date()
    let orderRows:orderRow[] = JSON.parse(localStorage.getItem("orderRows"))
    this.service.getLs();
/*     this.priceArray = this.shoppingList.map( e  => e.price)
  
    console.log(orderRows)
    console.log({"id":4327,"productId":77,"product":null,"amount":3,"orderId":3616}) */
    
    let calcArr = this.shopService.calculateTotal(this.shoppingList)
    this.total = calcArr[0]

    let order = new Order(
   
      298174, //CompanyId
      date.toISOString(),
      this.customerForm.value.firstName.concat(" ", this.customerForm.value.lastName), //CreatedBy
      this.customerForm.value.paymentMethod, //Payment method
      this.total, //total
      1, //status
      orderRows
      //this.idArray//ord
 
      //298174,date.toISOString(),"test","Paypal",0,0,[]

    )
      console.log(order)
    //DENNA
  this.checkoutService.sendOrder(order);

  }
}

