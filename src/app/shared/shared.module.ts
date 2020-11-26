import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

@NgModule({
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
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
