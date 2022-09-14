import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Dashboard Contents/header/header.component';
import { CarouselComponent } from './Dashboard Contents/carousel/carousel.component';
import { CardsComponent } from './Dashboard Contents/cards/cards.component';
import { LoginComponent } from './Login Screen Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    CardsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
