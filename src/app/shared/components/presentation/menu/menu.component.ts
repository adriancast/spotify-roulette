import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav() {
      document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }

}
