import { I18nServerModule } from './i18n/i18n.server.module';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    I18nServerModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
