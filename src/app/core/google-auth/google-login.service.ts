import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.metadata',
    'https://www.googleapis.com/auth/drive.metadata.readonly',
    'https://www.googleapis.com/auth/drive.photos.readonly',
    'https://www.googleapis.com/auth/drive.scripts',
    'https://www.googleapis.com/auth/drive.appdata',
    'https://www.googleapis.com/auth/drive.file'
  ].join(' ');

  private clientId =
    '170381248222-isn7ntpq8l5k0omlmlf8bhsf1iq8j1br.apps.googleusercontent.com';

  public auth2: any;

  constructor() {}

  public googleInit() {
    this.getGAPI().load('auth2', () => {
      this.auth2 = this.getGAPI().auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: this.scope
      });
      this.attachSignIn();
    });
  }

  public attachSignIn(): Observable<boolean> {
    return Observable.create(observer => {
      this.auth2
        .signIn()
        .then(googleUser => {
          const profile = googleUser.getBasicProfile();
          console.log('Token || ' + googleUser.getAuthResponse().id_token);
          console.log(
            'access_token || ' + googleUser.getAuthResponse().access_token
          );
          console.log('scope || ' + googleUser.getAuthResponse().scope);
          console.log(
            'expires_in || ' + googleUser.getAuthResponse().expires_in
          );
          console.log(
            'first_issued_at || ' + googleUser.getAuthResponse().first_issued_at
          );
          console.log(
            'expires_at || ' + googleUser.getAuthResponse().expires_at
          );
          console.log(
            'expires_in || ' + googleUser.getAuthResponse().expires_in
          );

          console.log('ID: ' + profile.getId());
          console.log('getName: ' + profile.getName());
          console.log('getGivenName: ' + profile.getGivenName());
          console.log('getFamilyName: ' + profile.getFamilyName());
          console.log('getImageUrl: ' + profile.getImageUrl());
          console.log('getEmail: ' + profile.getEmail());

          console.log(profile);

          observer.next(true);
          observer.complete();
        })
        .catch(error => {
          console.log(JSON.stringify(error, undefined, 2));
          observer.next(false);
          observer.complete();
        });
    });
  }

  getGAPI(): any {
    return gapi;
  }
}
