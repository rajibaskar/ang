import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/core';

import { textModelReducer } from './editor/editor.reducer';
import { TextModelState } from './editor/editor.model';

export const FEATURE_NAME = 'examples';
export const selectExamples = createFeatureSelector<State, ApplicationsState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ApplicationsState> = {
  todos: textModelReducer
};

export interface ApplicationsState {
  todos: TextModelState;
}

export interface State extends AppState {
  examples: ApplicationsState;
}
