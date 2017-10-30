import { SpotifyAudioService } from './../../../services/spotify-audio.service';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
import { Song } from '../../../models/song.interface';

@Component({
  selector: 'sr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [SpotifyService, SpotifyAudioService],
})
export class DashboardComponent implements OnInit {
  song: Song;

  constructor(
    private readonly _spotifyService: SpotifyService,
    private readonly _spotifyAudioService: SpotifyAudioService) {}

  ngOnInit() {
    this.initHeader();
    this.getRandomSongFromSpotify();
  }

  getRandomSongFromSpotify() {
    this._spotifyService
      .getRandomSongFromSpotify()
      .then((res: any) => {
        try {
          const response = JSON.parse(res._body).tracks[0];
          this.song = {
            name: response.name,
            imgUrl: response.album.images[0].url,
            playUrl: response.external_urls.spotify,
            previewUrl: response.preview_url,
            artistList: response.album.artists,
          };
        } catch (e) {
          this.song = null;
          console.log(e);
        }
      })
      .catch(err => console.log(err));
  }

  initHeader() {
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

  playSong(current: Song) {
    console.log(current.previewUrl);
    this._spotifyAudioService.playSong(current.previewUrl);
  }
}
