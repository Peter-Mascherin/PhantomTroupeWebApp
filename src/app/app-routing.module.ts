import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { HomeComponent } from './component/home/home.component';
import { AboutPageComponent } from './Menu/about-page/about-page.component';
import { CustomOrderPageComponent } from './Menu/custom-order-page/custom-order-page.component';
import { GalleryPageComponent } from './Menu/gallery-page/gallery-page.component';
import { PayPageComponent } from './Menu/pay-page/pay-page.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component'; 
import { RouteResolver } from './Resolver/RouteResolver';
import { PaymentFeedbackPageComponent } from './payment-feedback-page/payment-feedback-page.component';
import { SuccessPageComponent } from './Menu/pay-page/success/success-page/success-page.component';
import { FailPageComponent } from './Menu/pay-page/failure/fail-page/fail-page.component';

// Defined the router paths
const routes: Routes = [
  {
    path: 'about-page',
    component: AboutPageComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryPageComponent
  },
  {
    path: 'custom-page',
    component: CustomOrderPageComponent
  },
  {
    path: 'pay',
    component: PayPageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    resolve: {
      data: RouteResolver
    }
  }, 
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    resolve: {
      data: RouteResolver
    }
  },
  {
    path: 'success-page',
    component: SuccessPageComponent,
   
  },
  {
    path: 'fail-page',
    component: FailPageComponent,
   
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'payfeedback',
    component: PaymentFeedbackPageComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteResolver]
})
export class AppRoutingModule { }
