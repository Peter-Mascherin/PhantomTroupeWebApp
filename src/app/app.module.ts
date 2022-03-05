import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentModule } from './component/component.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutPageComponent } from './Menu/about-page/about-page.component';
import { GalleryPageComponent } from './Menu/gallery-page/gallery-page.component';
import { CustomOrderPageComponent } from './Menu/custom-order-page/custom-order-page.component';
import { PayPageComponent } from './Menu/pay-page/pay-page.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    GalleryPageComponent,
    CustomOrderPageComponent,
    PayPageComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    ComponentModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
