import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  constructor(private router: Router) { }
  opened = false;

  ngOnInit(): void {
  }

 /* openAbout(): void {
   // window.open('/about-page');
    this.router.navigate(['/about-page']);
  }*/

}
