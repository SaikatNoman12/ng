import { Routes, RouterModule } from '@angular/router';
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
import { SwitcCaseComponent } from './switc-case/switc-case.component';
import { NgFORComponent } from './ng-for/ng-for.component';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { PrjectComponent } from './prject/prject.component';
import { HomeComponent } from './prject/home/home.component';
import { ContactComponent } from './prject/contact/contact.component';
import { AboutComponent } from './prject/about/about.component';
import { ProductsComponent } from './prject/products/products.component';


const appRouting:Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'products', component:ProductsComponent},
  {path:'contacts', component:ContactComponent},
]


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
    SwitcCaseComponent,
    NgFORComponent,
    PushSpliceComponent,
    PrjectComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProductsComponent,
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
    RouterModule.forRoot(appRouting),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
