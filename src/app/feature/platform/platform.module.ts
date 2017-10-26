import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/presentation/not-found/not-found.component';
import { LoginComponent } from './components/smart/login/login.component';
import { DashboardComponent } from './components/smart/dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NotFoundComponent, LoginComponent, DashboardComponent],
  exports: [NotFoundComponent, LoginComponent, DashboardComponent],
})
export class PlatformModule {}
