import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BarraComponent } from './barra/barra.component';
import { ItemProdComponent } from './item-prod/item-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarraComponent,
    ItemProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
