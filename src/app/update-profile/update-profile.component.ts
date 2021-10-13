import { Component, OnInit } from '@angular/core';
import {  MaxPostServiceService } from '../max-post-service.service';
import { maxPost } from '../max-post-model';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
	add_photo : maxPost;
	selectedFiles: File;
  constructor(private Service: MaxPostServiceService) { }

  ngOnInit() {
  }
  
  selectFile(event) {
    this.selectedFiles = event.target.file;
  }
  
	upload_profile_photo() {
    var file = this.selectedFiles;
    this.selectedFiles = undefined;
	// this.add_photo =  new maxPost(file);
	this.Service.upload__profile__photo(file);
   }
 }