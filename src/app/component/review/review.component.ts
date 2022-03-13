import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  responsiveOptions: any;
  reviews: any;
  constructor() { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },

  ];
  }
/**
 * reviews are  just deefault placeholders
 * will have to add real ones 
 */

  ngOnInit(): void {
    this.reviews = [
      {name: 'Ryan', review: "\"I absolutely love thisss!!!!\""},
      {name: 'Cathy', review: " \"loved it!, Thank you so much !!!!\" "},
      {name: 'Alison', review: " \"It is so beautiful and well done\" "},
      {name: 'Coleen', review: " \"Beautiful work!\" "},
      {name: 'Jeanne', review: " \"Recommend to anyone looking for custom work!😉\" "},
     
  ];


  }

}
