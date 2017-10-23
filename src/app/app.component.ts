import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';

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
