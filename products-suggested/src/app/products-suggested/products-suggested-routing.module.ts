import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsSuggestedComponent } from './products-suggested.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsSuggestedComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsSuggestedRoutingModule {}
