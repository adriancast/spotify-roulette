import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/presentation/not-found/not-found.component';
import { LoginComponent } from './components/smart/login/login.component';
import { DashboardComponent } from './components/smart/dashboard/dashboard.component';
import { ContributorsComponent } from './components/smart/contributors/contributors.component';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../../shared/shared.module';
import { ContributorMemberComponent } from './components/presentation/contributor-member/contributor-member.component';

@NgModule({
  imports: [CommonModule, HttpModule, SharedModule],
  declarations: [
    NotFoundComponent,
    LoginComponent,
    DashboardComponent,
    ContributorsComponent,
    ContributorMemberComponent,
  ],
  exports: [NotFoundComponent, LoginComponent, DashboardComponent]
})
export class PlatformModule {}
