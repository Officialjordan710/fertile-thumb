import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './dashboard-contents/header/header.component';
import { CarouselComponent } from './dashboard-contents/carousel/carousel.component';
import { CardsComponent } from './dashboard-contents/cards/cards.component';
import { ForumComponent } from './forum-screen-components/forum/forum.component';
import { ThreadComponent } from './forum-screen-components/thread/thread.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    CardsComponent,
    routingComponents,
    ForumComponent,
    ThreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
