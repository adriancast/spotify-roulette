import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginGuard } from './guards/login.guard';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [LoginGuard],
})
export class CoreModule {}
