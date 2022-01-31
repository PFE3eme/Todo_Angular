import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductNewComponent } from './components/products/product-new/product-new.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [

  {path : "products", component : ProductsComponent}, 
  {path : "newProduct", component : ProductNewComponent}, 
  {path : "editProduct/:id", component : ProductEditComponent}, 
  {path : "", component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
