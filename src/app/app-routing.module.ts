import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutPageComponent } from './Menu/about-page/about-page.component';
import { CustomOrderPageComponent } from './Menu/custom-order-page/custom-order-page.component';
import { GalleryPageComponent } from './Menu/gallery-page/gallery-page.component';
import { PayPageComponent } from './Menu/pay-page/pay-page.component';

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
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
