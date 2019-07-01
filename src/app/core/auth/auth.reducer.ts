import { AuthState } from './auth.models';
import { AuthActions, AuthActionTypes } from './auth.actions';

export const initialState: AuthState = {
  isAuthenticated: false,
  basicProfile: null,
  googleAuth: null,
  token: null
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        basicProfile: action.payload.basicProfile,
        googleAuth: action.payload.googleAuth,
        token: action.payload.token
      };

    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        googleAuth: null,
        basicProfile: null,
        token: null
      };

    default:
      return state;
  }
}
