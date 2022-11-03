import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay-page',
  templateUrl: './pay-page.component.html',
  styleUrls: ['./pay-page.component.css']
})
export class PayPageComponent implements OnInit {
   payForm: FormGroup | any;
   service: any;
   orderID: any;
 

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.payForm = new FormGroup({
         orderID: new FormControl()
    });
   
  }

  submit(){
    //console.log(this.payForm.value);
    this.getOrderById()
  }

  getOrderById(){
    console.log(this.orderID)
    this.service.getOrderById(this.orderID)
    .subscribe((val:any) => {
      console.log(val)
      this.payForm = val;
    }
    );
  }



}
