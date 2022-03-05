import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutPageComponent } from './Menu/about-page/about-page.component';
import { GalleryPageComponent } from './Menu/gallery-page/gallery-page.component';

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
