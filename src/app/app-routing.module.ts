import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CategoryByIdComponent } from './components/category-by-id/category-by-id.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { SpecificProductComponent } from './components/specific-product/specific-product.component';

const routes: Routes = [

  {path:"products",component:ProductsComponent},
  {path:"", redirectTo:"/products" ,pathMatch:"full"},
  {path:"products/:id", component:SpecificProductComponent},
  {path:"search", component:SearchComponent},
  {path:"category/:id", component:CategoryByIdComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"admin", component:AdminComponent},
  {path:"orderSuccess", component:OrderSuccessComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
