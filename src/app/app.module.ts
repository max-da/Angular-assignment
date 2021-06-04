import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CategoryComponent} from "./components/category/category.component"
import {CategoryByIdComponent} from "./components/category-by-id/category-by-id.component"

import {NavigationComponent} from "./components/navigation/navigation.component"
import {NotFoundComponent} from "./components/not-found/not-found.component"
import {ProductsComponent} from "./components/products/products.component"
import {SearchComponent} from "./components/search/search.component"
import {ShoppingcartComponent} from "./components/shoppingcart/shoppingcart.component"
import {SpecificProductComponent} from "./components/specific-product/specific-product.component"
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminComponent } from './components/admin/admin.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryByIdComponent,

    NavigationComponent,
    NotFoundComponent,
    ProductsComponent,
    SearchComponent,
    ShoppingcartComponent,
    SpecificProductComponent,
    SearchFilterPipe,
    CheckoutComponent,
    AdminComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
