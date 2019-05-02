import { createSelector } from '@ngrx/store';

import { ApplicationsState, selectExamples } from '../applications.state';

export const selectStockMarket = createSelector(
  selectExamples,
  (state: ApplicationsState) => state.stocks
);
