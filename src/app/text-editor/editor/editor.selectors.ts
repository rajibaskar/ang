import { createSelector } from '@ngrx/store';

import { ApplicationsState, selectExamples } from '../text-editor.state';

export const selectTextModelState = createSelector(
  selectExamples,
  (state: ApplicationsState) => state.todos
);

export const selectTextModelItems = createSelector(
  selectTextModelState,
  state => state.items
);

export const selectTextModelFilter = createSelector(
  selectTextModelState,
  state => state.filter
);

export const selectTextModel = createSelector(
  selectTextModelItems,
  selectTextModelFilter,
  (items, filter) => {
    if (filter === 'ALL') {
      return items;
    } else {
      const predicate = filter === 'DONE' ? t => t.done : t => !t.done;
      return items.filter(predicate);
    }
  }
);

export const selectRemoveDoneTextModelDisabled = createSelector(
  selectTextModelItems,
  items => !items.some(item => item.done)
);
