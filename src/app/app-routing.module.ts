import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Formdata1Component } from './formdata1/formdata1.component';
import { ImageCardsComponent } from './image-cards/image-cards.component';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { CountryViewComponent } from './country-view/country-view.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'features', component: FeaturesComponent},
  {path:'pricing', component: PricingComponent},
  {path:'form1', component: Formdata1Component},
  {path:'complex', component: ComplexFormComponent},
  {path:'img', component: ImageCardsComponent},
  {path:'country', component: CountryViewComponent},
  {path:'', component: HomeComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
