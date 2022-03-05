import { Component, OnInit } from '@angular/core';
import { GalleryPics } from './GalleryInterface';
import JSONGallery from '../gallery-page/galleryjson/JSONgalleryinfo.json';


@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  constructor() { }

  gallerydata: GalleryPics[] = JSONGallery;

  ngOnInit(): void {
    console.log(this.gallerydata);
    console.log(this.gallerydata[0].imgurl);
  }

  alertme(id: number)
  {
    alert(`You chose ${this.gallerydata[id].imgtitle}`);
  }

  
}
