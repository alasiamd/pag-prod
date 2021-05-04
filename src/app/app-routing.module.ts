import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemProdComponent } from './item-prod/item-prod.component';
import { ItemsProdComponent } from './items-prod/items-prod.component';

const routes: Routes = [
  {
    path: '',
    component: ItemProdComponent
  },
  {
    path: 'prod/:idProd',
    component: ItemsProdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
