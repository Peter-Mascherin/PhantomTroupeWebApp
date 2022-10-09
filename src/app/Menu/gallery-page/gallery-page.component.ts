import { Component, Inject, OnInit } from '@angular/core';
import { GalleryPics } from './GalleryInterface';
import {MatDialog} from '@angular/material/dialog';
//import JSONGallery from '../gallery-page/galleryjson/JSONgalleryinfo.json'; //old one
import JSONGallery from '../gallery-page/galleryjson/jsonsuperbatch.json'; //server json
//import JSONGallery from '../gallery-page/galleryjson/localjsonsuperbatch.json'; //local json (for popup images)
import { GalleryDialogComponentComponent } from './gallery-dialog-component/gallery-dialog-component.component';
import { FormServiceService } from 'src/app/service/form-service.service';


@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  constructor(public dialog: MatDialog, private gallservice: FormServiceService) { }
  url: string = "";
  picurl: string ="";
  testtext: string = "";
  localhoststring: string = "http://localhost:3000";

  templimit = 100;

  gallerydata: GalleryPics[] = JSONGallery;
  
  personaldata: any;
  
  catGalImg: number [] = [];

  ngOnInit(): void {
    this.setGalleryJSON();
    console.log(this.gallerydata);
    console.log(this.gallerydata[0].imgurl);
    //console.log(JSONGallery);
    this.url = window.location.origin; //will grab the url FOR PRODUCTION TALKING TO SERVER
    //this.url = this.localhoststring; //FOR SERVER RUNNING ON LOCALHOST , NOT WITH PACKAGE
    //this.url = "../../../assets/images/galleryimages/"; //ONLY FOR LOCALHOST
    
    
    console.log('url='+this.url)
    //src="{{url}}/images/woodstovegall{{i}}.jpg"

    this.picurl = "/images/galleryimages/woodstovegall2.jpg"
    this.showKeychains() //decided keychains will be the default to show on load
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

  setGalleryJSON()
  {
      var jsonrecieve: any;
    this.gallservice.getGalleryInfo().subscribe(data => {
      jsonrecieve = data;
      var jsonobject = JSON.parse(jsonrecieve["json"])
      console.log(jsonobject);
      this.gallerydata = jsonobject;
    })
  }

  //this function is for testing
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  //functions to show different gallery images
  showKeychains(){
    console.log("keychains")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Keychains'){
        //console.log(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    //console.log(this.catGalImg)
    console.log(count)
  }

  showSuspenders(){
    console.log("suspenders")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Suspenders'){
        //console.log(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    
    //console.log(this.catGalImg)
    console.log(count)
  }

  showJournals(){
    console.log('testing journals')
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Journal'){
        //console.log(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    //console.log(this.catGalImg)
    console.log(count)
  }

  showBags(){
    console.log("test bags")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Bag'){
        //console.log(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    //console.log(this.catGalImg)
    console.log(count)
  }

  showStraps(){
    console.log("test straps")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Strap'){
        //console.log(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    //console.log(this.catGalImg)
    console.log(count)
  }

  showCollars(){
    console.log("test collars")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Collars'){
        //console.log(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    //console.log(this.catGalImg)
    console.log(count)
  }

  showBelts(){
    console.log("test belts")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Belt'){
        //console.log(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    //console.log(this.catGalImg)
    console.log(count)
  }

  showWallets(){
    console.log("test wallets")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Wallet'){
        //console.log(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    //console.log(this.catGalImg)
    console.log(count)
  } 
}
