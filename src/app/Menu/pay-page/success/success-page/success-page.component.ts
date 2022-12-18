import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {
  displayPage = false;
  constructor(private router: Router, private service: FormServiceService, private location: LocationStrategy) { 
   //look into disabling browser going back 
      
    

  }
  
   
  ngOnInit(): void {
    this.service.getRedirect()
    .subscribe(val => {
      if (val == false){
        this.displayPage = false;
        //("not allowed")
      }
      else{
        this.displayPage = true;
        //("allowed")
        //reset the redirect
        this.service.changeRedirect(false)
        .subscribe(val => {
          //("reset: "+val)
          
        })
      }
    })
  }

  BackToHome(){
    this.router.navigate(['/']);
  }

}
 