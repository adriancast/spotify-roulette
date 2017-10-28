import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorMemberComponent } from './contributor-member.component';

describe('ContributorMemberComponent', () => {
  let component: ContributorMemberComponent;
  let fixture: ComponentFixture<ContributorMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
