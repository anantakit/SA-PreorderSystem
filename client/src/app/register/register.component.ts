import {Component, OnInit} from '@angular/core';
import { RegisterService } from '../shared/register/register.service';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  genders: Array<any>;
  users: Array<any>;
  provinces: Array<any>;
  checkUserFromDB: '';
  reg: any = {
    Username: '',
    Password: '',
    RePassword: '',
    FirstName: '',
    LastName: '',
    Address: '',
    Province: '',
    Email: '',
    Telephone: '',
    Gender: null
  };

  constructor(private registerService: RegisterService) { }
  ngOnInit() {
    this.getGenderList();
    this.getUserList();
    this.getProvinceList();
  }

  getGenderList() {
    this.registerService.getGender().subscribe(data => {
      this.genders = data;
      console.log(this.genders);
    });
  }
  getUserList() {
    this.registerService.getUser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }
  getProvinceList() {
    this.registerService.getProvince().subscribe(data => {
      this.provinces = data;
      console.log(this.provinces);
    });
  }

  register(reg: NgForm) {
    console.log(reg);
    if (this.reg.Password != this.reg.RePassword) {
      alert("กรุณากรอกรหัสผ่านให้ตรงกัน");
    } else if (this.reg.Username === '' || this.reg.Password === '' || this.reg.RePassword === '' 
    || this.reg.FirstName === '' || this.reg.LastName === '' || this.reg.Address === '' ||  this.reg.Email === '' || this.reg.Telephone == '' ) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (this.reg.Gender === null) {
      alert("กรุณากรอกเพศ");
    } else {
      this.registerService.register(reg).subscribe(
        data => {
          alert('สมัครสมาชิกเรียบร้อยแล้ว');
          console.log('Register Successful!!', data);
        this.getUserList();
        this.reg.Username = '';
        this.reg.Password = '';
        this.reg.RePassword = '';
        this.reg.FirstName = '';
        this.reg.LastName = '';
        this.reg.Address = '';
        this.reg.Gender = '';
        this.reg.Email = '';
        this.reg.Telephone = '';
        this.reg.Province = '';
        },
        error => {
          console.log('Error! cannot register account!', error);
        }
      );
    }
  }

}
