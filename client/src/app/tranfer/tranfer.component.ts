import {Component, Injectable, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { TranferService } from '../shared/tranfer/tranfer.service';

@Component({
  selector: 'app-tranfer',
  templateUrl: './tranfer.component.html',
  styleUrls: ['./tranfer.component.css']
})

@Injectable()
export class TranferComponent implements OnInit {

  username:any;

  names:any={
    userFirstName:'',
    userLastName:''
  };

  reports:Array<any>;

  payment:any = {
    name:'',
    id:'',
    amount:'',
    date:'',
    time:'',
    note:''
  };

  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(private tranferService:TranferService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = localStorage.getItem('id');
    this.tranferService.getUser(this.username).subscribe(data => {
      this.names = data;
    });
    this.tranferService.getPayment(this.username).subscribe(data => {
      this.reports = data;
    });
  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
    if(this.selectedFiles.item(0).size>1048576){
      alert('this file is too large');
      this.selectedFiles = undefined;
    }
  }

  save(form:NgForm){
    console.log(form);
    this.currentFileUpload = this.selectedFiles.item(0);
    this.tranferService.pushFileToStorage(this.currentFileUpload).subscribe(data => {
    },error1 => {
      alert('upload error');
    });
    this.tranferService.save(form,this.payment.id,this.currentFileUpload.name).subscribe(data => {
      alert('save suscess');
      console.log(form+'\n'+this.payment.id+'\n'+this.currentFileUpload.name);
    },error1 => {
      alert('save error');
    });
  }

}
