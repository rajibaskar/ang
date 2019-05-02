import { v4 as uuid } from 'uuid';

import { TextModelActions, TextModelActionTypes } from './editor.actions';
import { TextModel, TextModelState } from './editor.model';

export const initialState: TextModelState = {
  items: [
    { id: uuid(), name: 'Open Todo list example', done: true },
    { id: uuid(), name: 'Check the other examples', done: false },
    {
      id: uuid(),
      name: 'Use Zi7 Office Apps in your project',
      done: false
    }
  ],
  filter: 'ALL'
};

export function textModelReducer(
  state: TextModelState = initialState,
  action: TextModelActions
): TextModelState {
  switch (action.type) {
    case TextModelActionTypes.ADD:
      return {
        ...state,
        items: [
          {
            id: action.payload.id,
            name: action.payload.name,
            done: false
          },
          ...state.items
        ]
      };

    case TextModelActionTypes.TOGGLE:
      return {
        ...state,
        items: state.items.map(
          (item: TextModel) =>
            item.id === action.payload.id ? { ...item, done: !item.done } : item
        )
      };

    case TextModelActionTypes.REMOVE_DONE:
      return {
        ...state,
        items: state.items.filter((item: TextModel) => !item.done)
      };

    case TextModelActionTypes.FILTER:
      return { ...state, filter: action.payload.filter };

    default:
      return state;
  }
}
