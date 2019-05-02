import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharedModule } from '@app/shared';
import { environment } from '@env/environment';

import { FEATURE_NAME, reducers } from './text-editor.state';
import { ApplicationsRoutingModule } from './text-editor-routing.module';
import { TodosContainerComponent } from './editor/components/todos-container.component';
import { TodosEffects } from './editor/todos.effects';
import { ApplicationsEffects } from './text-editor.effects';
import { HttpClient } from '@angular/common/http';
import { ModuleHomeComponent } from './module-home/module-home.component';

@NgModule({
  imports: [
    SharedModule,
    ApplicationsRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([ApplicationsEffects, TodosEffects])
  ],
  declarations: [ModuleHomeComponent, TodosContainerComponent],
  providers: []
})
export class TextEditorModule {
  constructor() {}
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/examples/`,
    '.json'
  );
}
