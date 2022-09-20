import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard-contents/header/header.component';
import { CarouselComponent } from './dashboard-contents/carousel/carousel.component';
import { CardsComponent } from './dashboard-contents/cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    CardsComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
