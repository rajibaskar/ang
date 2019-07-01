import { Injectable } from '@angular/core';
import { BasicProfile } from './basic-profile';
import { GoogleAuth } from './google-auth';
import { AppState } from '../core.state';
import { Store } from '@ngrx/store';
import { ActionAuthLogin } from '..';
import { ApiAuthServiceService } from '../api-service/api-auth-service.service';

declare const gapi: any;

const scope = [
  'profile',
  'email',
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.metadata',
  'https://www.googleapis.com/auth/drive.metadata.readonly',
  'https://www.googleapis.com/auth/drive.scripts',
  'https://www.googleapis.com/auth/drive.appdata',
  'https://www.googleapis.com/auth/drive.file'
].join(' ');

const clientId =
  '170381248222-isn7ntpq8l5k0omlmlf8bhsf1iq8j1br.apps.googleusercontent.com';

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  private auth2: any;

  constructor(
    private store: Store<AppState>,
    private apiAuthServiceService: ApiAuthServiceService
  ) {}

  public googleInit() {
    this.getGAPI().load('client:auth2', () => {
      this.auth2 = this.getGAPI().auth2.init({
        client_id: clientId,
        cookie_policy: 'single_host_origin',
        scope: scope
      });
      // this.attachSignIn();
    });
  }

  public attachSignIn(): void {
    this.auth2
      .signIn()
      .then(googleUser => {
        const basicProfile = this.setBasicProfile(googleUser.getBasicProfile());
        const googleAuth = this.setGoogleAuth(googleUser.getAuthResponse());

        this.apiAuthServiceService
          .addAuth(basicProfile, googleAuth)
          .subscribe(result => {
            this.store.dispatch(
              new ActionAuthLogin({
                basicProfile,
                googleAuth,
                token: result.idKey
              })
            );
          });
      })
      .catch(error => {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  public getGAPI(): any {
    return gapi;
  }

  private setBasicProfile(profile: any): BasicProfile {
    return {
      id: profile.getId(),
      name: profile.getName(),
      givenName: profile.getGivenName(),
      familyName: profile.getFamilyName(),
      imageUrl: profile.getImageUrl(),
      email: profile.getEmail()
    };
  }

  private setGoogleAuth(auth: any): GoogleAuth {
    return {
      idToken: auth.id_token,
      accessToken: auth.access_token,
      scope: auth.scope,
      expiresIn: auth.expires_in,
      expiresAt: auth.expires_at,
      firstIssuedAt: auth.first_issued_at,
      loginHint: auth.login_hint,
      token: auth.token
    };
  }
}
