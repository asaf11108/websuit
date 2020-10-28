import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularTiltModule } from 'angular-tilt';


@NgModule({
  declarations: [
    AppComponent,
    SelectLanguageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AngularTiltModule,
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
