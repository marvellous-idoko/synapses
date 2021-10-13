import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MaxPostServiceService } from '../max-post-service.service';
import { NgModule, Component, OnInit, Input } from '@angular/core';
import { maxPost } from '../max-post-model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input() fileUpload: maxPost;
  @Input() fileUploads: any[];
  public postId;
  public commment;
  public username;
  public userPhoto;

  constructor(
    private route: ActivatedRoute,
    private Service: MaxPostServiceService,
    private location: Location
  ) { }

  comment(form: NgForm) {
    var commment = form.value.comment;
    this.Service.commentPost(this.postId, form.value.comment);

    console.log("this is the form value", form.value.comment, this.postId);


    form.reset();
  }
  ngOnInit(): void {
    this.getmaxPost();
    this.getComment();
  }
  getmaxPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // console.log("this is the", id);
    this.postId = id;
    // console.log("this is the", this.postId);
    this.Service.getmaxPost(id).valueChanges().subscribe(fileUpload => {
    this.fileUpload = fileUpload;
    });
  }
  getComment(): void {
    this.Service.getComments(this.postId).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }
}