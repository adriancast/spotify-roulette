import { Component, OnInit } from '@angular/core';
import { ContributorsService } from '../../../services/contributors.service';

@Component({
  selector: 'sr-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
  providers: [ContributorsService]
})
export class ContributorsComponent implements OnInit {

  private contributors;

  constructor(private _contributorsService:ContributorsService) {
    this.contributors = _contributorsService.getRepoContributors()
  }

  ngOnInit() {
  }

}
