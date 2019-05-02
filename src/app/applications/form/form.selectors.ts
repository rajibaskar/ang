import { createSelector } from '@ngrx/store';

import { ApplicationsState, selectExamples } from '../applications.state';

export const selectFormState = createSelector(
  selectExamples,
  (state: ApplicationsState) => state.form
);
