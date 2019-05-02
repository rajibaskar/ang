export interface TextModel {
  id: string;
  name: string;
  done: boolean;
}

export type TextModelFilter = 'ALL' | 'DONE' | 'ACTIVE';

export interface TextModelState {
  items: TextModel[];
  filter: TextModelFilter;
}
