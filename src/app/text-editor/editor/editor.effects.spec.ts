import { LocalStorageService } from '@app/core';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { of } from 'rxjs';

import { State } from '../text-editor.state';
import { ActionTextModelToggle } from './editor.actions';
import { TextModelEffects, TEXT_EDITOR_KEY } from './editor.effects';
import { TextModelState } from './editor.model';

describe('TextModelEffects', () => {
  let localStorage: jasmine.SpyObj<LocalStorageService>;
  let store: jasmine.SpyObj<Store<State>>;

  beforeEach(() => {
    localStorage = jasmine.createSpyObj('LocalStorageService', ['setItem']);
    store = jasmine.createSpyObj('store', ['pipe']);
  });

  describe('persistTextEditor', () => {
    it('should not dispatch any action', () => {
      const actions$ = new Actions();
      const effect = new TextModelEffects(actions$, store, localStorage);
      const metadata = getEffectsMetadata(effect);

      expect(metadata.persistTodos).toEqual({ dispatch: false });
    });

    it('should call setItem on LocalStorageService for any action', () => {
      const textModelState: TextModelState = {
        items: [{ id: '1', name: 'Test ToDo', done: false }],
        filter: 'ALL'
      };
      store.pipe.and.returnValue(of(textModelState));
      const persistAction = new ActionTextModelToggle({ id: 'a' });
      const source = cold('a', { a: persistAction });
      const actions = new Actions(source);
      const effect = new TextModelEffects(actions, store, localStorage);

      effect.persistTodos.subscribe(() => {
        expect(localStorage.setItem).toHaveBeenCalledWith(
          TEXT_EDITOR_KEY,
          textModelState
        );
      });
    });
  });
});
