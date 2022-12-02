import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'woodstove'; 


  constructor(private router: Router) {}
  testfunc()
  {
    //("Yea the gallery button works");
  }

  goToAdmin(){
    //('Admin was clicked')
    this.router.navigate(['/admin']);
   
  }


}
