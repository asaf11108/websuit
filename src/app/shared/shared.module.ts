import { SelectLanguageComponent } from './../select-language/select-language.component';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    NgbModule,
    TranslateModule
  ],
  imports: [
    CommonModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    NgbModule,
    TranslateModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SelectLanguageComponent
  ],
  providers: []
})
export class SharedModule {
  constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
        throw new Error('SharedModule is already loaded. Import it in the AppModule only');
    }
}
}
