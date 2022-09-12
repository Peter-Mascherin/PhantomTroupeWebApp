import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnLogin(){
    this.worng();
  }

  btnCancel(){

  }

  worng(){ 
    Swal.fire({
      icon: 'error',
      title: 'Input error',
      text: 'Invalid Password or Username',
    })
  }


}
