import { SpotifyAudioService } from './../../../services/spotify-audio.service';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
import { Song } from '../../../models/song.interface';
import { AuthorizationService } from '../../../../../core/services/authorization.service';

@Component({
  selector: 'sr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [SpotifyService, SpotifyAudioService],
})
export class DashboardComponent implements OnInit {
  song: Song;
  last_seed: string = '01wpPOPqQ3XyS6hBN00HfK';

  constructor(
    private readonly _spotifyService: SpotifyService,
    private readonly _autorizationService: AuthorizationService,
    private readonly _spotifyAudioService: SpotifyAudioService) {}

  ngOnInit() {
    this.initHeader();
    this.getRandomSongFromSpotify();
  }

  updateSeed(){
    this.last_seed = this.song.id;
  }

  getRandomSongFromSpotify() {
    this._spotifyService
      .getRandomSongFromSpotify(this.last_seed)
      .then((res: any) => {
        try {
          const response = JSON.parse(res._body).tracks[0];
          this.song = {
            name: response.name,
            imgUrl: response.album.images[0].url,
            playUrl: response.external_urls.spotify,
            previewUrl: response.preview_url,
            artistList: response.album.artists,
            id: response.id
          };

          if(this.song.previewUrl == null){
            console.log('song not valid retry');
            this.getRandomSongFromSpotify();
          }
        } catch (e) {
          this.song = null;
        }
      })
      .catch(res => {
        if(res.status == 401){
          localStorage.removeItem('accessToken');
          localStorage.removeItem('stateKey');
          localStorage.removeItem('expiresIn');

          this._autorizationService.getAuthorization();
        }
      });
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
