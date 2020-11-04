import { NgModule } from '@angular/core';
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
    NgxPageScrollModule,
    NgxPageScrollCoreModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})
export class SharedModule { }
