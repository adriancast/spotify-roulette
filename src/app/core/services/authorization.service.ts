import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {
  constructor(private router: Router) {}

  generateRandomString(length): string {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  getHashParams(): any {
    const hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getAuthorization() {
    const state = this.generateRandomString(16);
    localStorage.setItem('stateKey', state);
    const scope = 'user-read-private user-read-email';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(environment.clientID);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(environment.redirectURI);
    url += '&state=' + encodeURIComponent(state);
    window.location.href = url;
  }

  getParameters() {
    const params = this.getHashParams();
    const access_token = params.access_token,
      state = params.state,
      expires_in = params.expires_in,
      storedState = localStorage.getItem('stateKey');

    if (state === storedState && access_token) {
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('expiresIn', expires_in);
      this.router.navigate(['/dashboard']);
    } else {
      this.getAuthorization();
    }
  }

  isAuthorized() {
    if (localStorage.getItem('accessToken')) {
      return true;
    }
    return false;
  }
}
