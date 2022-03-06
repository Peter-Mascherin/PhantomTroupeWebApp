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


  ngOnInit(): void {
    this.reviews = [
      {name: 'Alex', review: "Exception quality, recommend this company"},
      {name: 'Moe', review: "Stunned by the quality, love it !!!!"},
      {name: 'Joe', review: "Material is good and love it"},
      {name: 'Andy', review: "Best business I've done"},
      {name: 'Rob', review: "Received it quickly and was not disappointed 5/5"},
     
  ];


  }

}
