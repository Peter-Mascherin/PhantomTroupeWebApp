import { Component, Inject, OnInit } from '@angular/core';
import { GalleryPics } from './GalleryInterface';
import {MatDialog} from '@angular/material/dialog';
//import JSONGallery from '../gallery-page/galleryjson/JSONgalleryinfo.json'; //old one
import JSONGallery from '../gallery-page/galleryjson/jsonsuperbatch.json'; //server json
//import JSONGallery from '../gallery-page/galleryjson/localjsonsuperbatch.json'; //local json (for popup images)
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
  localhoststring: string = "http://localhost:3000";

  templimit = 100;

  gallerydata: GalleryPics[] = JSONGallery;
  personaldata: any;
  ngOnInit(): void {
    
    console.log(this.gallerydata);
    console.log(this.gallerydata[0].imgurl);
    console.log(JSONGallery);
    //this.url = window.location.origin; //will grab the url FOR PRODUCTION TALKING TO SERVER
    //this.url = this.localhoststring; //FOR SERVER RUNNING ON LOCALHOST , NOT WITH PACKAGE
    this.url = "../../../assets/images/galleryimages/"; //ONLY FOR LOCALHOST
    
    
    console.log('url='+this.url)
    //src="{{url}}/images/woodstovegall{{i}}.jpg"

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

  //this function is for testing
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  
}
