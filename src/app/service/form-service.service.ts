import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerData } from '../interfaces/CustomerData';
import { LoginData } from '../interfaces/LoginData';
import { ResultData } from '../interfaces/resultOutput';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http: HttpClient,private router: Router) { }
  url_location = window.location.origin;
  resultData = {} as ResultData;
 
  /**
   * 
   * @param cust: pass the customer details to the server
   * wont work unless run -- ng build and put dist folder in server 
   */
  sendToServer(cust: CustomerData){
    this.http.post(this.url_location + "/apis/send", {cust}, {responseType: 'text'}) //production
    // this.http.post("http://127.0.0.1:3000/apis/send", {cust}, {responseType: 'text'}) //local
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

/**
 * 
 * @returns pending orders from the backend
 */
retrievePendingOrders(){
  return this.http.get(this.url_location+"/apis/retrieveCustomerData")       // Production
  //return this.http.get("http://127.0.0.1:3000/apis/retrieveCustomerData") //Local
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
 return this.http.get(this.url_location + "/gall"); //production
 //return this.http.get("http://127.0.0.1:3000/gall") //local
}


}
