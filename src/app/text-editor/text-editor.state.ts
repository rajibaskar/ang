import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/core';

import { todosReducer } from './todos/todos.reducer';
import { TodosState } from './todos/todos.model';

export const FEATURE_NAME = 'examples';
export const selectExamples = createFeatureSelector<State, ApplicationsState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<ApplicationsState> = {
  todos: todosReducer
};

export interface ApplicationsState {
  todos: TodosState;
}

export interface State extends AppState {
  examples: ApplicationsState;
}
