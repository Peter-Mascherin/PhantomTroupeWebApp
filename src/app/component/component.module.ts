import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewComponent } from './review/review.component';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
@NgModule({
  declarations: [
    NavHeaderComponent, NavHeaderComponent, HomeComponent, ReviewComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ButtonModule,
    CardModule,
    ToastModule,
    CarouselModule
    
  ],
  exports:[NavHeaderComponent, ReviewComponent]
})
export class ComponentModule { }
