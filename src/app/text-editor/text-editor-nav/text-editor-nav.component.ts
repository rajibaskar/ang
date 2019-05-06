import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { routeAnimations, selectAuth } from '@app/core';
import { State as BaseSettingsState } from '@app/settings';

import { State as BaseApplicationsState } from '../../applications/applications.state';

interface State extends BaseSettingsState, BaseApplicationsState {}

@Component({
  selector: 'zi7-text-editor-nav',
  templateUrl: './text-editor-nav.component.html',
  styleUrls: ['./text-editor-nav.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextEditorNavComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  menu = [
    { link: 'files', label: 'zi7.text.editor.menu.files', auth: true },
    { link: 'edit', label: 'zi7.text.editor.menu.edit', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(
      select(selectAuth),
      map(auth => auth.isAuthenticated)
    );
  }
}
