import {
  ActionTextModelAdd,
  ActionTextModelFilter,
  ActionTextModelRemoveDone,
  ActionTextModelToggle,
  TextModelActionTypes
} from './editor.actions';

describe('TextEditor Actions', () => {
  describe('TextEditorAdd', () => {
    it('should create an action', () => {
      const action = new ActionTextModelAdd({ name: 'test' });
      expect(action.payload).toEqual(
        jasmine.objectContaining({
          name: 'test'
        })
      );
      expect(action.type).toEqual(TextModelActionTypes.ADD);
      expect(action.payload.id).toBeDefined();
    });
  });

  describe('ActionTextModelToggle', () => {
    it('should create an action', () => {
      const action = new ActionTextModelToggle({ id: '1' });

      expect({ ...action }).toEqual({
        type: TextModelActionTypes.TOGGLE,
        payload: { id: '1' }
      });
    });
  });

  describe('ActionTextModelRemoveDone', () => {
    it('should create an action', () => {
      const action = new ActionTextModelRemoveDone();

      expect({ ...action }).toEqual({
        type: TextModelActionTypes.REMOVE_DONE
      });
    });
  });

  describe('ActionTextModelFilter', () => {
    it('should create an action', () => {
      const action = new ActionTextModelFilter({ filter: 'DONE' });

      expect({ ...action }).toEqual({
        type: TextModelActionTypes.FILTER,
        payload: { filter: 'DONE' }
      });
    });
  });
});
