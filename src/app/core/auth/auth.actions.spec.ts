import {
  AuthActionTypes,
  ActionAuthLogin,
  ActionAuthLogout,
  ActionAuthLoginToken
} from './auth.actions';

describe('Auth Actions', () => {
  it('should create ActionAuthLogin action', () => {
    const action = new ActionAuthLogin({basicProfile: null, googleAuth: null});
    expect(action.type).toEqual(AuthActionTypes.LOGIN);
  });

  it('should create ActionAuthLogin Token action', () => {
    const action = new ActionAuthLoginToken({token: null});
    expect(action.type).toEqual(AuthActionTypes.LOGIN_TOKEN);
  });


  it('should create ActionAuthLogout action', () => {
    const action = new ActionAuthLogout();
    expect(action.type).toEqual(AuthActionTypes.LOGOUT);
  });
});
