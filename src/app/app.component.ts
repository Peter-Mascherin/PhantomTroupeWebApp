import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'woodstove'; 


  testfunc()
  {
    console.log("Yea the gallery button works");
  }
}
