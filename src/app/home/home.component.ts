import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MaxPostServiceService } from '../max-post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	  fileUploads: any[];

  constructor( private maxPostService: MaxPostServiceService ) {}
 
  ngOnInit() {
    // Use snapshotChanges().pipe(map()) to store the key
    this.maxPostService.getmaxPosts(10).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
      // console.log(this.fileUploads);
    });
  }
}