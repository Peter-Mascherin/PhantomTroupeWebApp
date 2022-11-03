import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-pay-page',
  templateUrl: './pay-page.component.html',
  styleUrls: ['./pay-page.component.css']
})
export class PayPageComponent implements OnInit {
   payForm: FormGroup | any;
   orderID: FormControl | any;
 

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
    this.service.getOrderById(this.orderID)
    .subscribe((val:any) => {
      console.log('The val is: ' + val)
      this.payForm = val as [];
    }
    );
  }



}
