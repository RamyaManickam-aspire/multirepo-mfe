import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsSuggestedModule } from './products-suggested/products-suggested.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProductsSuggestedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
