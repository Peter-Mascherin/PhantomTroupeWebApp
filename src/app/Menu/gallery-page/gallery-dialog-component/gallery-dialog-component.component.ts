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

  ngOnInit(): void {
  }


  onCancel(): void
  {
    this.dialogref.close();
  }
}
