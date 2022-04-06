import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerData } from 'src/app/interfaces/CustomerData';
import { FormServiceService } from 'src/app/service/form-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-custom-order-page',
  templateUrl: './custom-order-page.component.html',
  styleUrls: ['./custom-order-page.component.css']
})
export class CustomOrderPageComponent implements OnInit {
 
   

   formInfo = new FormGroup({});
   custData = {} as CustomerData; //will store data to our interface class
  


  constructor(private formService: FormServiceService) { }

  ngOnInit(): void {
    this.formInfo = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      style: new FormControl('', Validators.required),
      orderDetails: new FormControl('',[Validators.required, Validators.minLength(5)])
    })
  }

  //to be added to and grabbed from service
  categoryList = ["Wallets","Leather Jewellery","Pet Collars & Leashes",
  "Item Covers","Leather Gloves","Holsters","Guitar Straps",
  "Belts","Bags","Miscellaneous"]



  /**
   * when click submit, it adds the data to the interface and 
   * then use the service to send to the server
   */
  onSubmit(){ 

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Accept!',
      cancelButtonText: 'Deny!',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {

        this.custData.fullName = this.formInfo.get('fullName')?.value;
        this.custData.email = this.formInfo.get('email')?.value
        this.custData.style = this.formInfo.get('style')?.value
        this.custData.orderDetails = this.formInfo.get('orderDetails')?.value;

        //send to service to server
        this.formInfo.reset();
        this.formService.sendToServer(this.custData);
    
        console.log(this.custData)

        swalWithBootstrapButtons.fire(
          'Order Sumbited ',
          'Your order has been canceled.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Order Cancelled',
          'Your order was not placed:)',
          'error'
        )
      }
    })
  }
}