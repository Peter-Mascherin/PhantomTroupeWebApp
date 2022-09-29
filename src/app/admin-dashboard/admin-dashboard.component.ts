import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { CustomerData } from '../interfaces/CustomerData';
import { FormServiceService } from '../service/form-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public  fieldArray: Array<CustomerData> = [];
  public newAttribute: any = {};
  public field: Array<CustomerData> = [];

  constructor(private activatedRoute: ActivatedRoute, private service: FormServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data=> {
      console.log("User logged in") //delete after production
    })

    /**
     * fetch data from the backend to retreive all the orders
     */
    this.retrievePendingOrders();
    //retrieveApprovedOrders(); //TBC SOON
    //retrieveCompletedOrders(); //TBC soon
  }

  userLogOut(){
    console.log("user logging out")
    this.service.performLogOutAction()
  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};

}

  deleteFieldValue(index: number) {
  this.fieldArray.splice(index, 1);
}

/**
 * Calls service class to retrieve pending orders from backend
 */
retrievePendingOrders(){
  this.service.retrievePendingOrders()
  .subscribe(val => {
    this.fieldArray = val as [];
  }
  );
}
showDetails(_field: any){ 

  const details = 
  `
  Order Number:  ${_field._id }   
  Date:          ${_field.orderDate }
  Name:          ${_field.fullName } 
  Email:         ${_field.email }
  Style:         ${_field.style}
  `

  Swal.fire({
    title: 'Order Details',
    text: details,
    width: 1000,
    padding: '3em',
    color: '#black',
   
  })
  
}


}
