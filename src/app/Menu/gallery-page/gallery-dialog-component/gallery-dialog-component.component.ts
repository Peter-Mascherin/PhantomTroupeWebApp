import { Component, Inject, OnInit } from '@angular/core';
import { GalleryPics } from '../GalleryInterface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery-dialog-component',
  templateUrl: './gallery-dialog-component.component.html',
  styleUrls: ['./gallery-dialog-component.component.css']
})
export class GalleryDialogComponentComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<GalleryDialogComponentComponent>, @Inject(MAT_DIALOG_DATA) public data: GalleryPics) { }

  localhoststring: string = "http://localhost:3000"; //ONLY FOR LOCALHOST SERVER TESTING
  url: string = "../../../assets/images/galleryimages/woodstovegall"; //ONLY FOR LOCALHOST

  ngOnInit(): void {
    this.url = this.url + this.data.imgid + ".jpg";
  }


  onCancel(): void
  {
    this.dialogref.close();
  }
}
