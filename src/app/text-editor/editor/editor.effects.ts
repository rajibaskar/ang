import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, withLatestFrom } from 'rxjs/operators';

import { LocalStorageService } from '@app/core';

import { State } from '../text-editor.state';
import { TextModelActionTypes } from './editor.actions';
import { selectTodosState } from './editor.selectors';

export const TODOS_KEY = 'EXAMPLES.TODOS';

@Injectable()
export class TextModelEffects {
  constructor(
    private actions$: Actions<Action>,
    private store: Store<State>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  persistTodos = this.actions$.pipe(
    ofType(
      TextModelActionTypes.ADD,
      TextModelActionTypes.FILTER,
      TextModelActionTypes.REMOVE_DONE,
      TextModelActionTypes.TOGGLE
    ),
    withLatestFrom(this.store.pipe(select(selectTodosState))),
    tap(([action, todos]) => this.localStorageService.setItem(TODOS_KEY, todos))
  );
}
