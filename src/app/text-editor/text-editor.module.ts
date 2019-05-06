import { NgModule } from '@angular/core';
import { TextEditorHomeComponent } from './text-editor-home/text-editor-home.component';
import { SharedModule } from '@app/shared';
import { TextEditorRoutingModule } from './text-editor-routing.module';
import { TextEditorNavComponent } from './text-editor-nav/text-editor-nav.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { TextEditorEditComponent } from './text-editor-edit/text-editor-edit.component';

@NgModule({
  declarations: [
    TextEditorHomeComponent,
    TextEditorNavComponent,
    TextEditorEditComponent
  ],
  imports: [
    SharedModule,
    TextEditorRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ]
})
export class TextEditorModule {}

export function HttpLoaderFactory(http: HttpClient) {
  console.log(`--- Loading Translate ----${environment.i18nPrefix} -1-`);
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/text-editor/`,
    '.json'
  );
}
