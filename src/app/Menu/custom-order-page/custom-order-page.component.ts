import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-order-page',
  templateUrl: './custom-order-page.component.html',
  styleUrls: ['./custom-order-page.component.css']
})
export class CustomOrderPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //to be added to and grabbed from service
  categoryList = ["Wallets","Leather Jewellery","Pet Collars & Leashes","Item Covers","Leather Gloves","Holsters","Guitar Straps","Belts","Bags","Miscellaneous"]

}
