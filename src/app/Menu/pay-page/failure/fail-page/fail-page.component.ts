import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fail-page',
  templateUrl: './fail-page.component.html',
  styleUrls: ['./fail-page.component.css']
})
export class FailPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BackToHome(){
    this.router.navigate(['/']);
  }

}
