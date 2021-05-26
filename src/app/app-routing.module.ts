import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryByIdComponent } from './components/category-by-id/category-by-id.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { SpecificProductComponent } from './components/specific-product/specific-product.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"products/:id", component:SpecificProductComponent},
  {path:"search", component:SearchComponent},
  {path:"category/:id", component:CategoryByIdComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
