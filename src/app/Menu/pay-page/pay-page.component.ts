import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerData } from 'src/app/interfaces/CustomerData';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-pay-page',
  templateUrl: './pay-page.component.html',
  styleUrls: ['./pay-page.component.css']
})
export class PayPageComponent implements OnInit {
   payForm = new FormGroup({})

   orderVal: string = '';
   public  custData: Array<CustomerData> = [];
 

  constructor(private activatedRoute: ActivatedRoute, private service: FormServiceService) { }

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
    this.orderVal = this.payForm.get('orderID')?.value;
    this.service.getByOrderId(this.orderVal)
    .subscribe(val => {
      console.log(val)
      this.custData = val as [];
    }
    );
  }
}