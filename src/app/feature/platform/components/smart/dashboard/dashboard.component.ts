import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const typed = new Typed('.typed', {
      strings: ['favourite', 'treasured', 'desired', 'best-loved'],
      stringsElement: null,
      typeSpeed: 30,
      startDelay: 0,
      backSpeed: 70,
      backDelay: 500,
      loop: true,
      loopCount: 5,
      showCursor: false,
      cursorChar: '|',
      attr: null,
      contentType: 'html',
    });
  }
}
