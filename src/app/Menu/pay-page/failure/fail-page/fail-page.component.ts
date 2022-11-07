import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-fail-page',
  templateUrl: './fail-page.component.html',
  styleUrls: ['./fail-page.component.css']
})
export class FailPageComponent implements OnInit {

  constructor(private router: Router, private service: FormServiceService) { }
  displayPage = false;
  ngOnInit(): void {
    this.service.getRedirect()
    .subscribe(val => {
      if (val == false){
        this.displayPage = false;
        console.log("not allowed")
      }
      else{
        console.log("allowed")
        this.displayPage = true
        //reset the redirect
        this.service.changeRedirect(false)
        .subscribe(val => {
          console.log("reset: "+val)
          
        })
      }
    })

  
  }

  BackToHome(){
    this.router.navigate(['/']);
  }

}
