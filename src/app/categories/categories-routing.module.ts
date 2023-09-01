import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'categorieindex', component: IndexComponent },
  { path: 'categorie/:categorieId/view', component: ViewComponent },
  { path: 'categorieCreate', component: CreateComponent },
  { path: 'categorie/:categorieId/edit', component: EditComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
