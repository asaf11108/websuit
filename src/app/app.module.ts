import { ContactUsComponent } from './contact-us/contact-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularTiltModule } from 'angular-tilt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PortfolioComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AngularTiltModule,
    TranslateModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Optional() @SkipSelf() parentModule: AppModule) {
    if (parentModule) {
        throw new Error('AppModule is already loaded. Import it in the AppModule only');
    }
}
 }
