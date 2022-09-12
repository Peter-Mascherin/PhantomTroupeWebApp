import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginData } from 'src/app/interfaces/LoginData';
import { ResultData } from 'src/app/interfaces/resultOutput';
import { FormServiceService } from 'src/app/service/form-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
 admin_username: any;
 admin_pass: any;
 loginData = {} as LoginData;
 resultData = {} as ResultData;

  constructor(private service: FormServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data=> {
      console.log("User not logged") //delete after production
    })
  }

  /**
   * Check if credentials match, then go to dashboard
   * Otherwise stay on login screen
   */
  async btnLogin() {
   //validate with the server
   this.loginData.loginName = this.admin_username;
   this.loginData.loginPassword = this.admin_pass;
  this.service.sendLoginServer(this.loginData)
  .subscribe(val => {
     this.resultData = val as ResultData;
     if (this.resultData.status == "pass"){
       this.router.navigate(['/admin-dashboard'])
     }
     else{
      this.wrong();
     }
  })



    
  }

  btnCancel(){
   //exits and goes home
  }

  wrong(){ 
    Swal.fire({
      icon: 'error',
      title: 'Input error',
      text: 'Invalid Password or Username',
    })
  }


}
