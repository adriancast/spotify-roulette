import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContributorsService {

  constructor(private http: Http) { }

  getRepoContributors() {
  return this.http.get(`https://api.github.com/repos/adriancast/spotify-roulette/contributors`)
  .map((res:Response) => res.json());
}

}
