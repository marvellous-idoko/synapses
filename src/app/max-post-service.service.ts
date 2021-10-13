import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import 'firebase/storage';
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable, of } from 'rxjs';
import { maxPost } from './max-post-model';
import { MyUser } from './MyUser';
import { switchMap } from 'rxjs/operators';
import { async } from '@angular/core/testing';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
	providedIn: 'root'
})
export class MaxPostServiceService {

	private basePath = '/max-posts';
	public idd;
	public url__key;
	tes: Observable<any>;
	postt: {};
	postUrl: '';
	id: number;
	public S_userId;
	public S_username;
	public userId;
	public post__id;
	public commentValue;
	public post_id: number;
	public result: Observable<{}>;
	public email;
	public userPhoto;
	public userPhotoUrl;
	public username;
	public pass__word;
	public L__email;
	public L__password;
	public name: string;
	user: Observable<any>;
	constructor(public db: AngularFireDatabase, public afa: AngularFireAuth, private router: Router) {
		this.user = afa.authState;
	}
	login(email: string, passsword: string) {
		this.L__email = email;
		this.L__password = passsword;
		firebase.auth().signInWithEmailAndPassword(this.L__email, this.L__password).then(() => {
			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			this.router.navigateByUrl('max/home');
		});
	}
	upload__profile__photo(fileUpload: File) {
		const storageRef = firebase.storage().ref();
		const uploadTask = storageRef.child(`users_photos/${fileUpload.name}/`).put(fileUpload);
		uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
			(snapshot) => {
				var user = firebase.auth().currentUser;
				if (user) {
					uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
						var S_url = downloadURL;
						user.updateProfile({ photoURL: S_url, displayName: user.displayName }).then(() => {
							this.db.object(`users/${user.displayName}`).set({ photo: user.photoURL });
							console.log("this z my new URL", user.photoURL);
							console.log("this z my userInfo", user);
						}).then(() => {
							this.router.navigateByUrl('max/home');
						});
					});
				}
			});
	}
	// uploadProfilePhoto(fileUpload: maxPost) {
	// 	const storageRef = firebase.storage().ref();
	// 	const uploadTask = storageRef.put(fileUpload.file);
	// 	// storageRef.getDownloadURL().then(ooo =>{})
	// }
	createUser(email: string, pass__word: string, userName: string) {
		this.username = userName;
		this.email = email;
		this.pass__word = pass__word;
		firebase.auth()
			.createUserWithEmailAndPassword(this.email, this.pass__word)
			
			.then((response) => {
				response.user.updateProfile({ displayName: userName, photoURL: "" }).then(() => {
					console.log("this is user credentials", response.user);
					console.log("this is user name", response.user.displayName);
					console.log("this is userid", response.user.uid);
					this.db.object(`users/${response.user.displayName}`).set({
						userId: response.user.uid,
						username: response.user.displayName,
						email: response.user.email
					});

				}).then(() => {
					this.router.navigateByUrl('max/update-profile');
				});
			}).catch((e)=>{
				return e;
			});
	}

	post(post: {}, idd: number) {
		var f = new Date();
			this.db.object(`${this.basePath}/${idd}`).set(
				{post, dateStructure:f.toString(), date: f.toString().slice(0,15),  }
				).then(()=>{
					this.router.navigateByUrl('max/home');
				
				});

	}

async pushFileToStorage(files: FileList)  {
		const storageRef = firebase.storage().ref();
		if(files.item(0).type == "video/mp4" || "video/quicktime" || "video/webm" ){
			var ss = {}
			
				var uploadTask = storageRef.child(`${this.basePath}/${files.item(0).name}/`).put(files.item(0));
				// var rty = 
				ss = {video: await uploadTask.snapshot.ref.getDownloadURL()};
				console.log(ss);
			return ss;
		}
		else {
		for(let i = 0; i < files.length; i++){
			const uploadTask = storageRef.child(`${this.basePath}/${files.item(i).name}/`).put(files.item(i));
			var  rtr = [];
			rtr.push({photo: await  uploadTask.snapshot.ref.getDownloadURL()});
		}
	
			
	}
	// uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
		// 	// (snapshot) => {
		// 	// 	// in progress
		// 	// 	const snap = snapshot as firebase.storage.UploadTaskSnapshot;
		// 	// 	progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
		// 	// },
		// 	// (error) => {
		// 	// 	// fail
		// 	// 	console.log(error);
		// 	// },
		// 	() => {
		// 		// success
		// 		uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
		// 			 ;
		// 			// fileUpload.url = downloadURL;
		// 			// fileUpload.id = this.id;
		// 			// // fileUpload.name = fileUpload.img.name;
		// 			// this.saveFileData(fileUpload);
		// 			// this.router.navigateByUrl('max/home');
		// 		})
		// 	}
		// );

	}
	
// ysy = this.sj();
// 	sj(){
// 		return hh;	
// 	}
	saveFileData(fileUpload: maxPost) {
		console.log(this.id);
		this.url__key = 'img1';
		this.db.object(`${this.basePath}/${this.id}/${this.url__key}`).set(fileUpload);
		console.log("yes");
	}
	getmaxPosts(numberItems): AngularFireList<maxPost> {
		return this.db.list(this.basePath, ref =>
			ref.limitToLast(numberItems));
	}

	getmaxPost(id: number): AngularFireObject<maxPost> {
		return this.db.object(`${this.basePath}/${id}`);
	}


	getComments(id: number): AngularFireList<maxPost> {
		this.post_id = id;
		return this.db.list(`${this.basePath}/${this.post_id}/comments`);
	}

	// attachUserDetails(){
	// 	this.user.subscribe( user =>{ url = user.photoURL, username = user.displayName});

	// }

	commentPost(postId: number, komment: String) {
		var username, url, Vcomment, VpostId;
		Vcomment = komment;
		VpostId = postId;

		this.user.subscribe( user =>{
			 url = user.photoURL,
			 username = user.displayName
			 console.log("this is the comment", komment);
		console.log("this is the postId", postId, url, username);
		// this.commento =  'comments';
		this.db.list(`${this.basePath}/${postId}/comments/`).push({
			comment: komment,
			userpix: user.photoURL,
			username: user.displayName
		}).then(() => { console.log("we cool")}
		);
		});
		// console.log("this is the comment", komment);
		// console.log("this is the postId", postId, url, username);
		// // this.commento =  'comments';
		// this.db.object(`${this.basePath}/${postId}/comments/`).set({
		// 	comment: komment,
		// 	userpix: url,
		// 	username: username
		// }).then(() => { console.log("we cool")}
		// );
		
	}

}
