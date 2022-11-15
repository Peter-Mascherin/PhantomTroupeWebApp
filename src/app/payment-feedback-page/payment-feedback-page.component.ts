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
  displayPage = false;
  ngOnInit(): void {
    this.service.getRedirect()
    .subscribe(
      val => {
        console.log(val)
        if (val == true){
          this.displayPage = true;
          //then execute payment feedback
          this.route.queryParams
              .subscribe(
                params => {
                    this.service.getPaymentFeddback(params)
                    .subscribe(
                      val => {
                        this.direct.navigate(['/success-page'])
                      }
                    )
                    
                  
                  })
        }

        else{
          this.displayPage = false;
          console.log("unauthorized")
        }

      }
    )
  
   
     
    }
    
    
    BackToHome(){
      this.direct.navigate(['/']);
    }
        
    
    //  this.service.getPaymentFeddback()
    //  .subscribe(val => {
    //     console.log(val)
    //  })
     ;
  }




