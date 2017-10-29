import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
import { Song } from '../../../models/song';

@Component({
  selector: 'sr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [SpotifyService],
})
export class DashboardComponent implements OnInit {
  song: Song;
  constructor(private _spotifyService: SpotifyService) {}

  ngOnInit() {
    this.initHeader();
    this.getRandomSongFromSpotify();
  }

  getRandomSongFromSpotify(){
    this._spotifyService.getRandomSongFromSpotify()
    .then((res: any) => {
      //FIXME I don't know how to use interfaces properly
      var response = JSON.parse(res._body).tracks[0];
      this.song = new Song(response.name,
                           response.album.images[0].url,
                           response.external_urls.spotify,
                           response.album.artists);


    })
    .catch(err => console.log(err));
  }

  initHeader(){
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
