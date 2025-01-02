import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsSuggestedRoutingModule } from './products-suggested-routing.module';
import { ProductsSuggestedComponent } from './products-suggested.component';


@NgModule({
  declarations: [
    ProductsSuggestedComponent
  ],
  imports: [
    CommonModule,
    ProductsSuggestedRoutingModule
  ]
})
export class ProductsSuggestedModule { }
