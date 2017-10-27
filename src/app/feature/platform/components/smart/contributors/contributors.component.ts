import { Component, OnInit } from '@angular/core';
import { ContributorsService } from '../../../services/contributors.service';
@Component({
  selector: 'sr-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
  providers: [ContributorsService],
})
export class ContributorsComponent implements OnInit {
  contributors: any;
  constructor(private _contributorsService: ContributorsService) {}
  ngOnInit() {
    this._contributorsService
      .getRepoContributors()
      .then((res: any) => {
          this.contributors = JSON.parse(res._body);
      })
      .catch(err => console.log(err));
  }
}
