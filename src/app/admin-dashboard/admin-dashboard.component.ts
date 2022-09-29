import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { auto } from '@popperjs/core';
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
  public cancelField: Array<CustomerData> = [];


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
  Details:       ${ _field.orderDetails}
  `
  Swal.fire({
    title: details,
    heightAuto: true,
    padding: '3em',
    color: '#black',   
  })
}

async showApprove(){
  /*const { value: price } = await Swal.fire({
    title: 'Enter your Price',
    input: 'number',
  })
  if (price) {
    //Swal.fire(`Entered Price: ${price}`)
    this.showApprove2()
  }*/
  const { value: formValues } = await Swal.fire({
  title: 'Enter Price and a Message',
  html:
    '<label for="Price">Enter Price</label>' +
    '<input id="swal-input1" class="swal2-input">' +
    '<br/>' + '<br/>' +
    '<center><label for="mess">Enter Message</label></center>' +
    '<textarea rows="5" cols="50" id="multiLineInput"></textarea>',
  focusConfirm: false,
  width: 1000,
  padding: '3em',
  color: '#black'
})
if (formValues) {
  //Swal.fire(JSON.stringify(formValues))
  Swal.fire('An Email has been sent to the client')
}
}
 /* async showApprove2(){
  const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: 'Message',
    inputPlaceholder: 'Type your message here...',
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  })
  
  if (text) {
    Swal.fire('An Email has been sent to the client with the message and the price')
  }
}


// for now only removes the order
moveToCancelTab(_field: any, index: number){
  console.log(_field.fullName)
  console.log(index)

  const orderNum = _field.orderNumber
  const orderDate = _field.orderDate
  const orderName = _field.fullName
  const email = _field.email
  const style = _field.style
  const orderDetails = _field.orderDetails

  //this will delete the order
  //this.deleteFieldValue(index)
}
*/
cancel(_field: any, index: number){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'The order has been deleted.',
        'success'
      )
      //this.moveToCancelTab(_field, index)
      //console.log(_field.fullName, index)
    }
  })
}

}
