import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaxPostServiceService } from '../max-post-service.service';
import { maxPost } from '../max-post-model';
import { observable } from 'rxjs';
@Component({
	selector: 'app-max-post',
	templateUrl: './max-post.component.html',
	styleUrls: ['./max-post.component.css'],
})
export class MaxPostComponent implements OnInit {
	//   video: File;
	selectedFiles: FileList;
	currentmaxPost: maxPost;
	public idd: number;
	public pst: {};

	constructor(private Service: MaxPostServiceService) {

	}
	progress: { percentage: number } = { percentage: 0 };

	ngOnInit() {
	}
	selectFile(event) {
		this.selectedFiles = event.target.files;
	}

	post(form: NgForm) {
		function IDGenerator() {
			this.length = 8;
			this.timestamp = +new Date;
			var _getRandomInt = function (min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			this.generate = function () {
				var ts = this.timestamp.toString();
				var parts = ts.split("").reverse();
				var id = "";
				for (var i = 0; i < this.length; ++i) {
					var index = _getRandomInt(0, parts.length - 1);
					id += parts[index];
				}
				return id;
			}

		}
		var gen = new IDGenerator();
		this.idd = gen.generate();
		this.upload().then(rty => {

			this.Service.user.subscribe(user => {
				this.Service.post({
					topic: form.value.topic,
					content: form.value.content,
					userpix: user.photoURL,
					username: user.displayName,
					rty,
				}, this.idd);

			})
		})

	}
	// image/jpeg,image/png,image/webp
	checkImage(f: FileList): boolean {
		var g: boolean;
		for (let i = 0; i < f.length; i++) {
			if (f.item(i).type == 'image/webp') g = true;
			else if (f.item(i).type == 'image/png') g = true;
			else if (f.item(i).type == 'image/png') g = true;
			else {

				alert('You can only add one video, gif or not upto four photos')
				g = false;
				break;
			}
		}
		return g;
	}

	async upload() {
		const files = this.selectedFiles;
		if (files == undefined) return 'no media'
		else if (files.length == 1) {
			console.log('image selected')
			if (files.item(0).type == 'image/webp') console.log(files.item(0).type + ' single image');
			if (files.item(0).type == 'image/png') console.log(files.item(0).type + ' single image');
			if (files.item(0).type == 'image/jpeg') console.log(files.item(0).type + ' single image');
			if (files.item(0).type == 'image/gif') console.log(files.item(0).type + ' single gif');
			if (files.item(0).type == 'video/mp4') console.log(files.item(0).type + ' single video');
			if (files.item(0).type == 'video/quicktime') console.log(files.item(0).type + ' single image');
			if (files.item(0).type == 'video/webm') console.log(files.item(0).type + ' single image');
			else{
				return 'no media';
			}
			// return this.Service.pushFileToStorage(files);

		}

		else if (files.length > 1) {
			console.log(this.checkImage(files) + 'multiple image')
			if (this.checkImage(files) == true)return this.Service.pushFileToStorage(files);
			}
		
		// else if (files.item(0).type == 'image/jpeg' || 'image/png' || 'image/webp' && files.length < 4) {
		// 	console.log("78787");

		// 	// return this.Service.pushFileToStorage(files);

		// }
		// else if (files.item(0).type == 'image/gif' && files.length == 1) {
		// 	return this.Service.pushFileToStorage(files);
		// }
		// else if(files.item(0).type == 'video/mp4' || 'video/quicktime' || 'video/webm' && files.length > 1) {
		// 	alert("You can only add one video, one GIF or maximum of three photos to your post " +"1st");
		// 	// break;
		// }
		// else{
		// 	console.log("no photos")
		// }

		// }
		// ){

		// }
		// return this.Service.pushFileToStorage(files);

		// this.selectedFiles = undefined;
		// var p = new FormData();
		// 	 p.append('video', file)
		// this.currentmaxPost =  new maxPost(file, file);
		// console.log("yes");

	}
}