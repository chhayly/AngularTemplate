import { Component, OnInit } from '@angular/core';
import { faBars,faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navside-menu',
  templateUrl: './navside-menu.component.html',
  styleUrls: ['./navside-menu.component.css']
})
export class NavSideMenuComponent implements OnInit {
  isExpanded = true;
 
  faBars = faBars;
  faChevronLeft= faChevronLeft;

    ngOnInit()
    {
      
    }
    
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
