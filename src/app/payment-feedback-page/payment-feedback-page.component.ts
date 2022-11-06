import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormServiceService } from '../service/form-service.service';

@Component({
  selector: 'app-payment-feedback-page',
  templateUrl: './payment-feedback-page.component.html',
  styleUrls: ['./payment-feedback-page.component.css']
})
export class PaymentFeedbackPageComponent implements OnInit {

  constructor(private service: FormServiceService,private route: ActivatedRoute, private direct: Router) { }
  
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(
      params => {
        if (params.length != 0){
          this.service.getPaymentFeddback(params)
           .subscribe(
            val => {
              //redirect to success page: change the '/' to success page link
              // include button says return to home page on the success page
              this.direct.navigate(['/'])
            }
           )}
        })
      }
        
        
    
    //  this.service.getPaymentFeddback()
    //  .subscribe(val => {
    //     console.log(val)
    //  })
     ;
  }




