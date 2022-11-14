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
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleBindComponent } from './databind/class-style-bind/class-style-bind.component';
import { EventbindComponent } from './databind/eventbind/eventbind.component';
import { TemplateRefferenceComponent } from './databind/template-refference/template-refference.component';
import { TwoWayDataBindComponent } from './databind/two-way-data-bind/two-way-data-bind.component';
import { FormsModule } from '@angular/forms';
import { NgBootstrapComponent } from './ng-bootstrap/ng-bootstrap.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { IfElseThenComponent } from './if-else-then/if-else-then.component';


@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopNavComponent,
    HeaderComponent,
    CardsComponent,
    FirstCardComponent,
    SecondCardComponent,
    DatabindComponent,
    ClassStyleBindComponent,
    EventbindComponent,
    TemplateRefferenceComponent,
    TwoWayDataBindComponent,
    NgBootstrapComponent,
    IfElseThenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
