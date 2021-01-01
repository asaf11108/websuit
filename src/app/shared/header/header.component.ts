import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public darkHeader: boolean = false;  
  public menuItems: any[];
  public isMenuCollapsed = true;
  
  // Inject Document object
  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit() {
    //  $.getScript('./assets/js/script.js');
   }
  

  // @HostListener Decorator
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number >= 60) { 
      this.darkHeader = true;
    } else {
      this.darkHeader = false;
    }
  }

}
