import { Component } from '@angular/core';
import { MaxPostServiceService } from './max-post-service.service';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private Service : MaxPostServiceService) { }
title = 'SYNAPSE';
  showMenu = false;	
toggleMenu() {
    this.showMenu = !this.showMenu;
  }


}