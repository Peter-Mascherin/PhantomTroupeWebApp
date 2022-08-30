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

  var params = {
    text: ""
  }

  //return this.http.get("http://127.0.0.1:3000/galleryinfo");
  console.log("hi there gal")
  return this.http.get("http://127.0.0.1:3000/gall")
}
 
}
