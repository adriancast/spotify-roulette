import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptionsArgs, Request, Response, ConnectionBackend, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SpotifyService {

  constructor(private http: Http) { }

  getRandomSongFromSpotify(): Promise<Response>{

      var options = new RequestOptions({});

      if(localStorage.getItem("accessToken")) {
        if (!options.headers) {
          options.headers = new Headers();
        }
      options.headers.set("Authorization", "Bearer " + localStorage.getItem("accessToken"));
      }
    var url = `https://api.spotify.com/v1/recommendations?seed_tracks=0c6xIDDpzE81m2q797ordA&min_popularity=50&market=US&limit=1`;
    return this.http.get(url, options).toPromise();
  }

}
