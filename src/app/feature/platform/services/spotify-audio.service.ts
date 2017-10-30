import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SpotifyAudioService {
  audio: HTMLAudioElement;
  ended$: Subject<boolean> = new BehaviorSubject<boolean>(null);
  songUrl: string;

  playSong(nextSongUrl) {
    this.pauseSong();

    if (nextSongUrl === this.songUrl) {
      this.songUrl = null;
      return;
    }

    this.songUrl = nextSongUrl;
    this.audio = new Audio(nextSongUrl);
    this.audio.play();
    this.audio.addEventListener('ended', () => {
      this.songUrl = null;
      this.ended$.next(true);
    });
  }

  pauseSong() {
    if (this.audio) {
      this.audio.pause();
    }
  }

  destroy() {
    if (this.audio) {
      this.audio.pause();
      delete this.audio;
    }
  }
}
