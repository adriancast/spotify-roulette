import { LoginGuard } from './core/guards/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { NotFoundComponent } from './feature/platform/components/presentation/not-found/not-found.component';
import { LoginComponent } from './feature/platform/components/smart/login/login.component';
import { DashboardComponent } from './feature/platform/components/smart/dashboard/dashboard.component';
import { ContributorsComponent } from './feature/platform/components/smart/contributors/contributors.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'contributors',
    component: ContributorsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
