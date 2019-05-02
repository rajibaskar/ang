import { v4 as uuid } from 'uuid';
import { Action } from '@ngrx/store';

import { TextModelFilter, TextModelState } from './editor.model';

export enum TextModelActionTypes {
  ADD = '[TextEditor] Add',
  TOGGLE = '[TextEditor] Toggle',
  REMOVE_DONE = '[TextEditor] Remove Done',
  FILTER = '[TextEditor] Filter'
}

export class ActionTextModelAdd implements Action {
  readonly type = TextModelActionTypes.ADD;
  readonly payload: { id: string; name: string };

  constructor({ id = uuid(), name = '' }: { id?: string; name: string }) {
    this.payload = { id, name };
  }
}

export class ActionTextModelToggle implements Action {
  readonly type = TextModelActionTypes.TOGGLE;

  constructor(readonly payload: { id: string }) {}
}

export class ActionTextModelRemoveDone implements Action {
  readonly type = TextModelActionTypes.REMOVE_DONE;
}

export class ActionTextModelFilter implements Action {
  readonly type = TextModelActionTypes.FILTER;

  constructor(readonly payload: { filter: TextModelFilter }) {}
}

export type TextModelActions =
  | ActionTextModelAdd
  | ActionTextModelToggle
  | ActionTextModelRemoveDone
  | ActionTextModelFilter;
