import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent, MfeSharedServiceModule } from 'mfe-shared-service';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    FormsModule,
    CommonModule,
    ProductsRoutingModule,
    MfeSharedServiceModule,
  ],
})
export class ProductsModule {}
