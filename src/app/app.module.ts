import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { Formdata1Component } from './formdata1/formdata1.component';
import { ImageCardsComponent } from './image-cards/image-cards.component';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryViewComponent } from './country-view/country-view.component'

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    HomeComponent,
    PricingComponent,
    PageNotFoundComponent,
    Formdata1Component,
    ImageCardsComponent,
    ComplexFormComponent,
    CountryViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
