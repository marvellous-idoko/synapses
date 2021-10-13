import { Component, OnInit, Input } from '@angular/core';
import { maxPost } from '../max-post-model';
import { MaxPostServiceService } from '../max-post-service.service';


@Component({
  selector: 'app-post-pane',
  templateUrl: './post-pane.component.html',
  styleUrls: ['./post-pane.component.css']
})
export class PostPaneComponent implements OnInit {
@Input() fileUpload: maxPost;
 // form: NgForm;
  constructor(private maxPostService: MaxPostServiceService) { }
 
  ngOnInit() {
  }
  
}