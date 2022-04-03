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
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentModule } from './component/component.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutPageComponent } from './Menu/about-page/about-page.component';
import { GalleryPageComponent } from './Menu/gallery-page/gallery-page.component';
import { CustomOrderPageComponent } from './Menu/custom-order-page/custom-order-page.component';
import { PayPageComponent } from './Menu/pay-page/pay-page.component';
import { GalleryDialogComponentComponent } from './Menu/gallery-page/gallery-dialog-component/gallery-dialog-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    GalleryPageComponent,
    CustomOrderPageComponent,
    PayPageComponent,
    GalleryDialogComponentComponent 
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
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
    ComponentModule,
    MatDialogModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
