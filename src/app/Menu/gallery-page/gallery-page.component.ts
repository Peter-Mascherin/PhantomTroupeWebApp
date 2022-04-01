import { Component, OnInit } from '@angular/core';
import { GalleryPics } from './GalleryInterface';
import {MatDialog} from '@angular/material/dialog';
import JSONGallery from '../gallery-page/galleryjson/JSONgalleryinfo.json';
import { GalleryDialogComponentComponent } from './gallery-dialog-component/gallery-dialog-component.component';


@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  url: string = "";
  picurl: string ="";

  gallerydata: GalleryPics[] = JSONGallery;
  personaldata: any;
  ngOnInit(): void {
    console.log(this.gallerydata);
    console.log(this.gallerydata[0].imgurl);
    this.url = window.location.hostname;
    this.picurl = "/images/galleryimages/woodstovegall2.jpg"
    
  }

  alertme(id: number)
  {

    var galitem = this.gallerydata[id];

    const dialogref = this.dialog.open(GalleryDialogComponentComponent,{
      width:'400px',
      data: galitem,
      panelClass: 'dialog-container-custom'
    });
  }

  
}
