import { Component, Inject, OnInit } from '@angular/core';
import { GalleryPics } from './GalleryInterface';
import {MatDialog} from '@angular/material/dialog';
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

  gallerydata: GalleryPics[] = [];
  
  personaldata: any;
  
  catGalImg: number [] = [];

  ngOnInit(): void {
    this.setGalleryJSON();
    this.bucketUrl = "https://woodstoveleathergoodsbulkimages.s3.us-east-2.amazonaws.com"
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
     this.gallservice.getGalleryInfo().subscribe(data => {
     this.gallerydata = data as [];
     this.showKeychains() //display keychains as default on page load
    })

  }

  //this function is for testing
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  resetClick(newElement: number){
     let newHtml = <HTMLElement>document.querySelector('#cat'+newElement)
     newHtml.style.color = 'rgb(248, 232, 88)'

    for (let i =0; i< 8; i++){
      if (i != newElement){
        let oldHtml = <HTMLElement>document.querySelector(('#cat'+i))
      //
      oldHtml.style.textDecoration = 'none'
      oldHtml.style.color = 'white'
      }
      
    }
    
  }

  //functions to show different gallery images
  showKeychains(){
    this.resetClick(0)
    
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Keychains'){
        ////(this.gallerydata[i])
        console.log(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }

  }



  showSuspenders(){
    //("suspenders")
    this.resetClick(1)

    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Suspenders'){
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
  }


  showJournals(){
    this.resetClick(2)
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Journal'){
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }
  }

  showBags(){
    this.resetClick(3)
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Bag'){
        ////(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
    }

  }

  showStraps(){
    this.resetClick(4)
    var count = 0
    this.catGalImg = []
    for (let i = 0; i < this.gallerydata.length; i++) {
      if (this.gallerydata[i].category == 'Strap'){
        ////(this.gallerydata[i])
        this.catGalImg[i] = this.gallerydata[i].imgid
        count++
      }
     
    }
  }

  showCollars(){
    this.resetClick(5)
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
    this.resetClick(6)
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
    this.resetClick(7)
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
function rgb(arg0: number, arg1: number, arg2: number): string {
  throw new Error('Function not implemented.');
}

