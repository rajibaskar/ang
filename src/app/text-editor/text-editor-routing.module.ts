import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { TextEditorHomeComponent } from './text-editor-home/text-editor-home.component';
import { TextEditorNavComponent } from './text-editor-nav/text-editor-nav.component';
import { TextEditorEditComponent } from './text-editor-edit/text-editor-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TextEditorNavComponent,
    children: [
      {
        path: '',
        redirectTo: 'files',
        pathMatch: 'full'
      },
      {
        path: 'files',
        component: TextEditorHomeComponent,
        data: { title: 'zi7.text.editor.menu.files' }
      },
      {
        path: 'edit',
        component: TextEditorEditComponent,
        data: { title: 'zi7.text.editor.menu.edit' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextEditorRoutingModule {}
