import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { auto } from '@popperjs/core';
import Swal from 'sweetalert2';
import { CustomerData } from '../interfaces/CustomerData';
import { FormServiceService } from '../service/form-service.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

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
  private paidStatus : any = ""; //whether paid/unpaid
  public selectedFile: any;
  public selectedCategory: string = "";
  public formimagetitle: string = "";
  

  selectedTab : Number = 0; //default tab is 0 -> which represents Pending tab.
  selectedTabTitle : string = "Pending";  //default tab title, changes based on event

  constructor(private activatedRoute: ActivatedRoute, private service: FormServiceService) { }

  //this list is to match the gallery categories
  categoryList = ["Keychains",
  "Suspenders",
  "Journal",
  "Bag",
  "Strap",
  "Collars",
  "Belt",
  "Wallet",
  ]

  imagesrc: String = "";

  

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data=> {
      console.log("User logged in") //delete after production
    })
    this.retrieveOrdersByStatus();
  }

  /**
   * Gets the selected active tab index and every time it changes
   * then retrieveOrders from database
   * @param tabChangeEvent Triggered on every every the mat tab is changed
   */
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    //console.log(tabChangeEvent.index);
    this.selectedTab = tabChangeEvent.index;
    if (this.selectedTab == 0){
      this.selectedTabTitle = "Pending";
    }else if (this.selectedTab == 1){
      this.selectedTabTitle = "Approved"
    }else if (this.selectedTab == 2){
      this.selectedTabTitle = "Completed"
    }
    this.retrieveOrdersByStatus();

  }

  /**
   * When clicked, reloads the latest data from database
   */
  reloadData(){
    this.retrieveOrdersByStatus();
  }

  

  /**
   * Upload files
   * @param event Await user to upload file
   */
  showfile(event: any)
  {
    var imagefilelist = event.target.files;
    this.selectedFile = <File>event.target.files[0];
    var theimage = document.getElementById("previewimage") as HTMLImageElement;
    theimage.src = URL.createObjectURL(imagefilelist[0]);
    
    
  }

  onUpload()
  {
    var formdata = new FormData();

    var imagetitle = this.formimagetitle;

    var imagecategory = this.selectedCategory;
    
    formdata.set("imagefile",this.selectedFile);
    formdata.set("imagetitle",imagetitle);
    formdata.set("imagecategory",imagecategory);
   
    
    console.log("now printing the values of the form \n");
    formdata.forEach(g => {
      console.log(g);
    });


    this.service.sendImageToServer(formdata).subscribe(result => {
      console.log(result);
    })
    
  }

  changeCategory(value:any)
  {
    console.log(value);
    this.selectedCategory = value;
  }

  /**
   * Respinsible ofr calling service to log user out
   */
  userLogOut(){
    console.log("user logging out")
    this.service.performLogOutAction()
  }

  /**
   * 
   */
  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};

}
/**
 * Removes the order from the view and performs 3 operations
 * Approve - moves order to pending
 * Cancel/Archive - deletes the customer order
 * Mark As Completed - moves order to completed tab
 * @param index the field row
 * @param cust customer object
 * @param operation: approve - moves order to pending
 *                   cancel(Archive) - deletes the customer order
 *                   complete - moves order to completed tab
 */
  performOperation(cust: CustomerData, index: number, operation: string ) {

     this.fieldArray.splice(index, 1);
     if (operation == "approve"){
        this.service.approveOrder(cust)
     }else if (operation == "cancel"){
        this.service.removeOrder(cust)
     }else if(operation == "complete"){
      this.service.completeOrder(cust)

     }
     
}

/**
 * Calls service class to retrieve pending orders from backend
 */
retrieveOrdersByStatus(){
  console.log(this.selectedTabTitle)
  this.service.retrieveByStatus(this.selectedTabTitle)
  .subscribe(val => {
    console.log(val)
    this.fieldArray = val as [];
  }
  );
}
showDetails(_field: any){ 
  var priceVal = "";
  if (_field.price == 0){
     priceVal = "No price set"
  }else{
    priceVal = _field.price;
  }

  const details = 
 
  `
  Order Number:  ${_field._id } 
  Date:          ${_field.orderDate }
  Name:          ${_field.fullName } 
  Email:         ${_field.email }
  Style:         ${_field.style}
  Details:       ${ _field.orderDetails}
  Price:         ${priceVal}
  `

  console.log(details);

  Swal.fire({
    title: "Order details\n"+details,
    heightAuto: true,
    padding: '4em',
    color: '#black',
    width: auto
  })
}

/**
 * This will approve the order and move it to approved tab as well
 * as include the price and msg
 */
async showApprove(cust: CustomerData, index: number){
  Swal.fire({
    title: "Approve",
    text: "Enter price for product!",
    input: 'number',
    confirmButtonText: 'Approve order',
    cancelButtonText: 'Cancel',       
}).then((result) => {
    
    if (result.value > 0 && result.value <= 50000 ) {
      Swal.fire('An Email has been sent to the client with the price')
      cust.orderStatus = "Approved";
      cust.price = result.value;
      cust.isPaid = "unpaid"
      this.performOperation(cust, index, "approve")
    }else{
      Swal.fire("Please enter a valid price")
    }
});
  
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
cancel(cust: CustomerData, index: number){
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

      this.performOperation(cust, index, "cancel")
    }
  })
}

markAsComplete(cust: CustomerData, index: number){
  Swal.fire({
    title: 'Are you sure?',
    text: "Order will be set as complete!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Completed!',
        'The order is complete.',
        'success'
      )
      cust.orderStatus = "Completed"
      this.performOperation(cust, index, "complete")

    
    

    }
  })
}

/**
 * Changes isPaid status to "[paid]", only if paid(to be completed after payment integration)
 * @param cust CustomerObject
 */
changePriceStatus(cust: CustomerData){  

}

}
