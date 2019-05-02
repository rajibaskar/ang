import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  ActionAuthLogin,
  ActionAuthLogout,
  routeAnimations,
  AppState,
  LocalStorageService,
  selectIsAuthenticated
} from '@app/core';
import { environment as env } from '@env/environment';

import {
  ActionSettingsChangeLanguage,
  ActionSettingsChangeAnimationsPageDisabled,
  selectEffectiveTheme,
  selectSettingsLanguage,
  selectSettingsStickyHeader
} from './settings';

declare const gapi: any;

@Component({
  selector: 'zi7-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/logo.png');
  languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he'];
  navigation = [
    { link: 'about', label: 'zi7.menu.about' },
    { link: 'features', label: 'zi7.menu.features' },
    { link: 'examples', label: 'zi7.menu.examples' },
    { link: 'text-editor', label: 'zi7.menu.text-editor' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'zi7.menu.settings' }
  ];

  isAuthenticated$: Observable<boolean>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;

  private clientId =
    '170381248222-isn7ntpq8l5k0omlmlf8bhsf1iq8j1br.apps.googleusercontent.com';

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

  public auth2: any;

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService
  ) {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        new ActionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.googleInit();

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  /*
  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin());
  }
*/
  onLogoutClick() {
    this.store.dispatch(new ActionAuthLogout());
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(new ActionSettingsChangeLanguage({ language }));
  }

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: this.scope
      });
      this.attachSignin();
    });
  }

  public attachSignin() {
    this.auth2
      .signIn()
      .then(googleUser => {
        const profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log(
          'access_token || ' + googleUser.getAuthResponse().access_token
        );
        console.log('scope || ' + googleUser.getAuthResponse().scope);
        console.log('expires_in || ' + googleUser.getAuthResponse().expires_in);
        console.log(
          'first_issued_at || ' + googleUser.getAuthResponse().first_issued_at
        );
        console.log('expires_at || ' + googleUser.getAuthResponse().expires_at);
        console.log('expires_in || ' + googleUser.getAuthResponse().expires_in);

        console.log('ID: ' + profile.getId());
        console.log('getName: ' + profile.getName());
        console.log('getGivenName: ' + profile.getGivenName());
        console.log('getFamilyName: ' + profile.getFamilyName());
        console.log('getImageUrl: ' + profile.getImageUrl());
        console.log('getEmail: ' + profile.getEmail());

        console.log(profile);

        // ...
        this.store.dispatch(new ActionAuthLogin());
      })
      .catch(error => {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }
}
