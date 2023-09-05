import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ProductcardComponent } from './productcard/productcard.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    ViewComponent,
    EditComponent,
    ProductcardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
