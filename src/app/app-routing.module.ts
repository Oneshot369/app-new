import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Formdata1Component } from './formdata1/formdata1.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'features', component: FeaturesComponent},
  {path:'pricing', component: PricingComponent},
  {path:'form1', component: Formdata1Component},
  {path:'', component: HomeComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
