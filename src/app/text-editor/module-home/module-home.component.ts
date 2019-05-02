import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { routeAnimations, selectAuth } from '@app/core';
import { State as BaseSettingsState } from '@app/settings';

import { State as BaseApplicationsState } from '../text-editor.state';

interface State extends BaseSettingsState, BaseApplicationsState {}

@Component({
  selector: 'zi7-examples',
  templateUrl: './module-home.component.html',
  styleUrls: ['./module-home.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModuleHomeComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [{ link: 'todos', label: 'zi7.examples.menu.todos', auth: true }];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(
      select(selectAuth),
      map(auth => auth.isAuthenticated)
    );
  }
}
