import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { ProductListEditComponent } from './product-list-edit/product-list-edit.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "products",
    component: ProductListComponent,
    pathMatch: 'full'
  },
  {
    path: "products/new",
    component: ProductCreationComponent,
    pathMatch: 'full'
  },
  {
    path: "products/edit/:id",
    component: ProductListEditComponent,
    pathMatch: 'full'
  },
  {
    path: "products/remove/:id",
    component: RemoveproductComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
