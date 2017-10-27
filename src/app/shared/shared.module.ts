import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/presentation/menu/menu.component';
import { FooterComponent } from './components/presentation/footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MenuComponent, FooterComponent],
  exports: [MenuComponent, FooterComponent],
})
export class SharedModule {}
