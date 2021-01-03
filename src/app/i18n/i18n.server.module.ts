import { Inject, NgModule } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Request } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Observable, of } from 'rxjs';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFSLoaderFactory,
        deps: [TransferState]
      }
    })
  ]
})
export class I18nServerModule {
  constructor(translate: TranslateService, @Inject(REQUEST) req: Request) {
    translate.addLangs(['en', 'th']);

    const language: 'en' | 'th' = req.query.lang || req.cookies.lang || 'en';
    translate.use(language.match(/en|th/) ? language : 'en');
  }
}

export class TranslateFSLoader implements TranslateLoader {
  constructor(
    // ADDED: inject the transferState service
    private transferState: TransferState,
    private prefix = '/i18n',
    private suffix = '.json'
  ) { }

  public getTranslation(lang: string): Observable<any> {
    const path = join(__dirname, '../browser/assets', this.prefix, `/${lang}${this.suffix}`);
    const data = JSON.parse(readFileSync(path, 'utf8'));
    // ADDED: store the translations in the transfer state:
    const key = makeStateKey<any>('transfer-translate-' + lang);
    this.transferState.set(key, data);
    return of(data);
  }
}

export function translateFSLoaderFactory(transferState: TransferState) {
  return new TranslateFSLoader(transferState);
}