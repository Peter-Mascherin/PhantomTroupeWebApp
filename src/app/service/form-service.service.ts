import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerData } from '../interfaces/CustomerData';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http: HttpClient) { }



  //send data to server
  //wont work unless run -- ng build and put dist folder in server 
  sendToServer(cust: CustomerData){
/*    var url_location = window.location.origin;
    this.http.post(url_location + "/apis/send", {cust}, {responseType: 'text'})
    .subscribe(val => {
      console.log(val);
    })
  }
*/


//to test in local host, run the server and uncomment the line below
     this.http.post("http://127.0.0.1:3000/apis/send", {cust}, {responseType: 'text'})
    .subscribe(val => {
      console.log(val)
      //console.log(val);
    })
  }


//-------------------------------------------------------

//used to get the gallery json
getGalleryInfo()
{
  //the commented code is for production only , to find server name
  // var url_location = window.location.origin;
  //return this.http.get(url_location + "/galleryinfo");

  var params = {
    text: ""
  }
  //return this.http.get("http://127.0.0.1:3000/galleryinfo");
  //this return code is for localhost only , uncomment the top one and comment this one out when deploying to production
  return this.http.get("http://127.0.0.1:3000/gall")
}
 
}
