import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { PlatformModule } from './feature/platform/platform.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PlatformModule,
    RouterModule,
    CoreModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
