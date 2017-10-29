import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  sidebarWidth: number;

  constructor() {}

  ngOnInit() {
    this.sidebarWidth = 0;
  }

  openNav() {
    this.sidebarWidth = 250;
  }

  closeNav() {
    this.sidebarWidth = 0;
  }
}
