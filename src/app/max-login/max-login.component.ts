import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import {  MaxPostServiceService } from '../max-post-service.service';

@Component({
  selector: 'app-max-login',
  templateUrl: './max-login.component.html',
  styleUrls: ['./max-login.component.css']
})
export class MaxLoginComponent implements OnInit {

  constructor(private Service: MaxPostServiceService) { }

  ngOnInit() {
  }
  
  loginUser(form : NgForm){
	  var email = form.value.email;
	  var pass__word = form.value.password;
	  this.Service.login(email, pass__word );
	  form.reset();
  }
}