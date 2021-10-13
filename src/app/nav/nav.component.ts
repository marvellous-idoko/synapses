import { Component, OnInit , Input } from '@angular/core';
import { MaxPostServiceService } from '../max-post-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 constructor(private Service : MaxPostServiceService) { }

  ngOnInit(){
  }
 
}