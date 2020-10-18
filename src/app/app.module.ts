import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { SelectLanguageComponent } from './select-language/select-language.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectLanguageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TranslateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
