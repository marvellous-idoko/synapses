import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import {  MaxPostServiceService } from '../max-post-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	public email;
	public pass__word;
	public user__name;
  constructor( private Service: MaxPostServiceService) { }
  ngOnInit() {
  }
   
   registerUser(form : NgForm){
	  this.email = form.value.email;
	  this.user__name = form.value.username;
	  this.pass__word = form.value.password;
	  form.reset();
	  console.log(this.pass__word, this.email);
	  this.Service.createUser(this.email, this.pass__word,  this.user__name)
	  
  }
 
}