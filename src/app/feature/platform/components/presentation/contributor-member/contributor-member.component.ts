import { Component, Input } from '@angular/core';
import { Contributor } from '../../../models/contributor.interface';

@Component({
  selector: 'sr-contributor-member',
  templateUrl: './contributor-member.component.html',
  styleUrls: ['./contributor-member.component.scss'],
})
export class ContributorMemberComponent {
  @Input() contributor: Contributor;

  constructor() {}
}
