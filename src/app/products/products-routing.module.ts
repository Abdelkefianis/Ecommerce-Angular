import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ProductcardComponent } from './productcard/productcard.component';

const routes: Routes = [
  { path: 'products', redirectTo: 'productIndex', pathMatch: 'full' },
  { path: 'productIndex', component: IndexComponent },
  { path: 'product/:productId/view', component: ViewComponent },
  { path: 'productCreate', component: CreateComponent },
  { path: 'product/:productId/edit', component: EditComponent },
  { path: 'productcard', component: ProductcardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
