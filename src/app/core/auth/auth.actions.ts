import { Action } from '@ngrx/store';
import { BasicProfile } from '../google-auth/basic-profile';
import { GoogleAuth } from '../google-auth/google-auth';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGOUT = '[Auth] Logout'
}

export class ActionAuthLogin implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(
    public payload: { basicProfile: BasicProfile; googleAuth: GoogleAuth }
  ) {}
}

export class ActionAuthLogout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions = ActionAuthLogin | ActionAuthLogout;
