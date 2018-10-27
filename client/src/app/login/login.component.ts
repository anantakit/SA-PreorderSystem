import { Component, OnInit } from '@angular/core';
import {LoginService} from '../shared/login/login.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={
    userUsername:'',
    userPassword:''
  }

  constructor(private route:Router,private loginService:LoginService) { }

  ngOnInit() {
  }

  login(userForm:NgForm){
    this.loginService.login(userForm).subscribe(data => {
      localStorage.setItem('id',this.user.userUsername);
      this.route.navigate(['shopping']);
    },error => {
      alert('wrong username or password');
    })
  }

}
