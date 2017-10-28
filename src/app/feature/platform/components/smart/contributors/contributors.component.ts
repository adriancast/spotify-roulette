import { Component, OnInit } from '@angular/core';
import { ContributorsService } from '../../../services/contributors.service';
import { Contributor } from '../../../models/contributor.interface';
@Component({
  selector: 'sr-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
  providers: [ContributorsService],
})
export class ContributorsComponent implements OnInit {
  contributors: Contributor[];

  constructor(private _contributorsService: ContributorsService) {}

  ngOnInit() {
    this._contributorsService
      .getRepoContributors()
      .then((res: any) => {
        this.contributors = <Contributor[]>JSON.parse(res._body);
      })
      .catch(err => console.log(err));
  }
}
