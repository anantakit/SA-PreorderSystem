import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'System Analysis and Design 61 / 1';
 
  constructor(private router:Router){

  }
  goClassification(){
      this.router.navigate(['/classification'])
  }
  goHomePage(){
    this.router.navigate(['/'])
  }
  goShopping(){
    this.router.navigate(['/shopping'])
  }
  goHistory(){
    this.router.navigate(['/show-preorder'])
  }
  goStock() { 
    this.router.navigate(['/Stock']); 
  }
  goRegister() { 
    this.router.navigate(['/Register']); 
  }
}


