import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { StaticModule } from '@app/static/static.module';

@NgModule({
  imports: [
    // Angular
    BrowserAnimationsModule,
    BrowserModule,

    // Core & Shared
    CoreModule,
    SharedModule,

    // Pages
    StaticModule,

    // App
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
