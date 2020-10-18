import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { I18nBrowserModule } from './i18n/i18n.browser.module';

@NgModule({
  imports: [
    I18nBrowserModule,
    AppModule,
    BrowserTransferStateModule
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule { }