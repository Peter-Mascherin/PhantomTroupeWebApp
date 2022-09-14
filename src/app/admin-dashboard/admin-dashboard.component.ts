import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormServiceService } from '../service/form-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public  fieldArray: Array<any> = [];
  public newAttribute: any = {};

  constructor(private activatedRoute: ActivatedRoute, private service: FormServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data=> {
      console.log("User logged in") //delete after production
    })
  }

  userLogOut(){
    console.log("user logging out")
    this.service.performLogOutAction()
  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
    console.log(this.newAttribute.num)
    console.log(this.newAttribute.data)
    console.log(this.newAttribute.name)
    console.log(this.newAttribute.style)
}

  deleteFieldValue(index: number) {
  this.fieldArray.splice(index, 1);
}


}
