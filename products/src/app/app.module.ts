import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { MfeSharedServiceModule } from 'mfe-shared-service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    MfeSharedServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
