import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CategoryComponent} from "./components/category/category.component"
import {CategoryByIdComponent} from "./components/category-by-id/category-by-id.component"
import {HomeComponent} from "./components/home/home.component"
import {NavigationComponent} from "./components/navigation/navigation.component"
import {NotFoundComponent} from "./components/not-found/not-found.component"
import {ProductsComponent} from "./components/products/products.component"
import {SearchComponent} from "./components/search/search.component"
import {ShoppingcartComponent} from "./components/shoppingcart/shoppingcart.component"
import {SpecificProductComponent} from "./components/specific-product/specific-product.component"
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryByIdComponent,
    HomeComponent,
    NavigationComponent,
    NotFoundComponent,
    ProductsComponent,
    SearchComponent,
    ShoppingcartComponent,
    SpecificProductComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
