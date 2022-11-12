import { MyContainerComponent } from './myContainer/myContainer.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './myContainer/top-nav/top-nav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { CardsComponent } from './myContainer/cards/cards.component';
import { FirstCardComponent } from './myContainer/cards/first-card/first-card.component';
import { SecondCardComponent } from './myContainer/cards/second-card/second-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopNavComponent,
    HeaderComponent,
    CardsComponent,
    FirstCardComponent,
    SecondCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
