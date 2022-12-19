import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerData } from 'src/app/interfaces/CustomerData';
import { FormServiceService } from 'src/app/service/form-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pay-page',
  templateUrl: './pay-page.component.html',
  styleUrls: ['./pay-page.component.css']
})
export class PayPageComponent implements OnInit {
   payForm = new FormGroup({})

   orderVal: string = '';
   orderdata = {} as CustomerData;
   orderIsNull: Boolean = false;
   
   
   public  custData: Array<CustomerData> = [];
 

  constructor(private activatedRoute: ActivatedRoute, private service: FormServiceService) { }

  ngOnInit(): void {
    this.payForm = new FormGroup({
         orderID: new FormControl()
    });
  }

  /**
   * This will go to service class and run paypal from backend
   */
  payOrder(){
   this.service.payForOrder(this.custData[0])
  }

  payForOrder(){
    this.payOrder()
  }

  getOrderById(){
    this.orderVal = this.payForm.get('orderID')?.value;
    this.service.getByOrderId(this.orderVal)
    .subscribe(val => {
      //(val)
      this.custData = val as [];
      
      this.orderdata = this.custData[0];

      if(this.orderdata == null)
      {
        this.orderIsNull = true;
        this.orderDoesntExist()
      }
      else
      {
        this.orderIsNull = false;
        if(this.orderdata.orderStatus != "Approved")
        {
          this.wrongOrderNum();
        }
      else{
        if (this.orderdata.isPaid == "paid"){
            this.orderPaid();
          }
        }
      }
      /*
      if(this.orderdata.orderStatus != "Approved")
      {
        this.wrongOrderNum();
      }
      else{
        if (this.orderdata.isPaid == "paid"){
            this.orderPaid();
          }
        }
        */
  }
    );
  }

  wrongOrderNum(){
    Swal.fire({
      icon: 'error',
      title: 'Wrong Order Number',
      text: 'Order Number has not been approved yet or is completed.',
    })
  }

  orderDoesntExist(){
    Swal.fire({
      icon: 'error',
      title: 'Order Not Found',
      text: 'Order not found. Either order does not exist or order id is incorrect',
    })
  }

  orderPaid(){
    Swal.fire({
      icon: 'error',
      title: 'Warning!',
      text: 'Order has been paid for already!',
    })
  }
}