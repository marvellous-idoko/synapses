import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import {  MaxPostServiceService } from '../../max-post-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public email;
 public password;
  constructor(private Service : MaxPostServiceService) { }

  ngOnInit() {
  }
	login(form:NgForm){
		this.email = form.value.email;
		this.password = form.value.password;
		form.reset();
		this.Service.login(this.email,this.password);
	}
  
}
