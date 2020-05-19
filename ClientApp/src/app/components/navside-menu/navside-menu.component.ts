import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navside-menu',
  templateUrl: './navside-menu.component.html',
  styleUrls: ['./navside-menu.component.css']
})
export class NavSideMenuComponent implements OnInit {

    ngOnInit()
    {
        document.querySelector("body").style.marginLeft = "50px";
        document.querySelector("body").style.overflowX = "hidden";
        document.querySelector("body").style.transition = "0.5s";
    }


  isExpanded = false;

   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //document.querySelector(".navcollapsed").style.display = "none";
    //document.querySelector(".navexplanded").style.display = "block";

    document.querySelector("body").style.marginLeft = "250px";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "50px";
    //document.querySelector(".navexplanded").style.display = "none";
    //document.querySelector(".navcollapsed").style.display = "block";

    document.querySelector("body").style.marginLeft = "50px";
  }


  toggle() {
    this.isExpanded = (document.getElementById("mySidenav").style.width == "250px");

    if(this.isExpanded)
    {
        this.closeNav();
    }
    else
    {
        this.openNav();
    }
  }
}
