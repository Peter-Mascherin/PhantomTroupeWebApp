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
  bucketUrl: string = "";
  picurl: string ="";
  testtext: string = "";
  localhoststring: string = "http://localhost:3000";

  templimit = 100;

  gallerydata: GalleryPics[] = JSONGallery;
  
  personaldata: any;
  
  catGalImg: number [] = [];

  ngOnInit(): void {
    this.setGalleryJSON();
    //(this.gallerydata);
    //(this.gallerydata[221]);
    //(this.gallerydata[0].imgurl);
    ////(JSONGallery);
    this.url = window.location.origin; //will grab the url FOR PRODUCTION TALKING TO SERVER
    //this.url = this.localhoststring; //FOR SERVER RUNNING ON LOCALHOST server
    //this.url = "../../../assets/images/galleryimages/"; //ONLY FOR frontend
    
    
    //('url='+this.url)
    //src="{{url}}/images/woodstovegall{{i}}.jpg"

    this.picurl = "/images/galleryimages/woodstovegall2.jpg"
    this.bucketUrl = "https://woodstoveleathergoodsbulkimages.s3.us-east-2.amazonaws.com"
    this.showKeychains() //decided keychains will be the default to show on load
  }

  alertme(id: number)
  {
    //(id)

    var galitem = this.gallerydata[id];
    //(galitem)

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
     this.gallerydata = data as GalleryPics[];
     //(this.gallerydata)
    })
  }

  //this function is for testing
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  //functions to show different gallery images
  showKeychains(){
    //("keychains")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Keychains'){
        ////(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    ////(this.catGalImg)
    //(count)
  }

  showSuspenders(){
    //("suspenders")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Suspenders'){
        ////(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    
    ////(this.catGalImg)
    //(count)
  }

  showJournals(){
    //('testing journals')
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Journal'){
        ////(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    ////(this.catGalImg)
    //(count)
  }

  showBags(){
    //("test bags")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Bag'){
        ////(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    ////(this.catGalImg)
    //(count)
  }

  showStraps(){
    //("test straps")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Strap'){
        ////(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
     
    }
    ////(this.catGalImg)
    //(count)
  }

  showCollars(){
    //("test collars")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Collars'){
        ////(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    ////(this.catGalImg)
    //(count)
  }

  showBelts(){
    //("test belts")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Belt'){
        ////(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    ////(this.catGalImg)
    //(count)
  }

  showWallets(){
    //("test wallets")
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Wallet'){
        ////(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
    ////(this.catGalImg)
    //(count)
  } 
}
