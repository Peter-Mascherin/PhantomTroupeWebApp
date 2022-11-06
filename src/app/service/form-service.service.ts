import { query } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerData } from '../interfaces/CustomerData';
import { LoginData } from '../interfaces/LoginData';

import { ResultData } from '../interfaces/resultOutput';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http: HttpClient,private router: Router, @Inject(DOCUMENT) private document: Document) { }
  url_location = window.location.origin;
  resultData = {} as ResultData;
 
  /**
   * 
   * @param cust: pass the customer details to the server
   * wont work unless run -- ng build and put dist folder in server 
   */
  sendToServer(cust: CustomerData){
    //this.http.post(this.url_location + "/apis/send", {cust}, {responseType: 'text'}) //production
    this.http.post("http://127.0.0.1:3000/apis/send", {cust}, {responseType: 'text'}) //local
    .subscribe(val => {
      console.log(val)
    })
  }


/**
 * Sends the login data to server and authenticate
 * only be tested in production
 * @param loginData 
 * @returns 
 */
sendLoginServer(loginData: LoginData){
  return this.http.post(this.url_location +"/apis/login", {loginData});
}

/**
 * Checks to see if user is authenticated if manually 
 * access the dashboard, 
 * @returns redirect if user is logged in
 */
isUserAuthenticated(){
 //return this.http.post("http://127.0.0.1:3000/isAuth",{responseType: "json"}).  //local
  return this.http.post(this.url_location+ "/isAuth", {responseType: "json"}). //production
  subscribe(val => {
    console.log(val)
    this.resultData = val as ResultData;
    if (this.resultData.status == "notLogged"){
      this.router.navigate(['/admin'])
    }else{
      this.router.navigate(['/admin-dashboard'])
    }
  })
}

/**
 * logs out user, makes request to server to delete token
 * @returns UI of admin page
 */
performLogOutAction(){
   //return this.http.post("http://127.0.0.1:3000/apis/logout",{responseType: "json"}).  //local
   return this.http.post(this.url_location+ "/apis/logout", {responseType: "json"}). //production
   subscribe(val => {
    console.log(val)
     this.router.navigate(['/admin'])
   })
}






///used to get the gallery json
getGalleryInfo()
{
  //the commented code is for production only , to find server name
  // var url_location = window.location.origin;
  //return this.http.get(url_location + "/galleryinfo");

  var params = {
    text: ""
  }
 //return this.http.get(this.url_location + "/gall"); //production
 return this.http.post("http://127.0.0.1:3000/gall", {responseType: "json"}) //local
}

sendImageToServer(theform: FormData)
{
  return this.http.post("http://127.0.0.1:3000/uploadimage",theform);
}

/**
 * Gets orders based on their status
 */
retrieveByStatus(orderStatus: string){
  var val = {"status": orderStatus}
  //return this.http.post(this.url_location +"/apis/getByStatus" ,val);
  return this.http.post("http://127.0.0.1:3000/apis/getByStatus" ,val);
}

/**
 * Gets the order info by order ID 
 */
getByOrderId(orderID: string){
var val = {"_id": orderID}
  console.log(orderID)
  //return this.http.post(this.url_location +"/apis/getOrderById", val);
  return this.http.post("http://127.0.0.1:3000/apis/getByOrderId", val);
}

/**
 * Approves order(changes status to approved) and sends it to the "approved tab"
 */

approveOrder(cust: CustomerData){
  //this.http.post(this.url_location + "/apis/approve_order", {cust}, {responseType: 'json'}) //production
   this.http.post("http://127.0.0.1:3000/apis/approve_order", {cust}, {responseType: 'json'}) //local
    .subscribe(val => {
      var result = val as ResultData
      if (result.status == "fail"){
        console.log("backend failed")
      }
    })
}

/**
 * This deletes the order from the collection
 * @param cust CustomerObject
 */
removeOrder(cust: CustomerData){
  //this.http.post(this.url_location + "/apis/cancel_order", {cust}, {responseType: 'json'}) //production
  this.http.post("http://127.0.0.1:3000/apis/cancel_order", {cust}, {responseType: 'json'}) //local
  .subscribe(val => {
    var result = val as ResultData
    if (result.status == "fail"){
      console.log("backend failed")
    }
  })
}

/**
 * Changes status of order to completed 
 * @param cust CustomerObject
 */
completeOrder(cust: CustomerData){
  //this.http.post(this.url_location + "/apis/completed_order", {cust}, {responseType: 'json'}) //production
  this.http.post("http://127.0.0.1:3000/apis/completed_order", {cust}, {responseType: 'json'}) //local
  .subscribe(val => {
    var result = val as ResultData
    if (result.status == "fail"){
      console.log("backend failed")
    }
  })
}

 payForOrder(){//cust: CustomerData){
  var cust = {
    
    "_id":"633e4a0c70db3a104e134cc9",
    "fullName":"Jurgen Klopp",
    "email":"Mohdbd99@gmail.com",
    "style":"Wallet",
    "orderDetails":"Need it for my games",
    "orderStatus":"Approved",
    "price":13,
    "orderDate":"Oct 5, 2022",
    "isPaid":"unpaid"
}
  this.http.post("http://127.0.0.1:3000/apis/payOrder", cust) //local
  .subscribe(val=> {
    this.executePayment(val)
   
  })

}

executePayment(val: any){
  this.document.location.href = val;
}

getPaymentFeddback(data: any){
 return this.http.post("http://127.0.0.1:3000/apis/payFeedback", data,{responseType: "json"})
  
  
  //local

}





}