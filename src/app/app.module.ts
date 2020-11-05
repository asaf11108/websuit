import { ScreenshotComponent } from './screenshot/screenshot.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { FeatureComponent } from './feature/feature.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularTiltModule } from 'angular-tilt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectLanguageComponent,
    IntroComponent,
    AboutComponent,
    FeatureComponent,
    HowItWorkComponent,
    ScreenshotComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AngularTiltModule,
    TranslateModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
