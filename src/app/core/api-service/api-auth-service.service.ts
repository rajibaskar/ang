import { Injectable } from '@angular/core';
import { BasicProfile } from '../google-auth/basic-profile';
import { GoogleAuth } from '../google-auth/google-auth';
import { throwError } from 'rxjs';
import { Auth } from './auth';
import { environment as env } from '@env/environment';
import { catchError, filter } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import {selectAuth } from '../auth/auth.selectors';
import { AppState } from '../core.state';
import { ActionAuthLoginToken } from '../auth/auth.actions';
import { AuthState } from '../auth/auth.models';


@Injectable({
  providedIn: 'root'
})
export class ApiAuthServiceService {

  baseURL = env.apiUrl + '/google-auth';
  token = '';

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.store
        .pipe(select(selectAuth),
              filter((authState: AuthState) => authState.token === null)
        ) .subscribe(state => this.addAuth(state.basicProfile, state.googleAuth));
  }

  addAuth (basicProfile: BasicProfile, googleAuth: GoogleAuth): void {
    const auth: Auth = {
      basicProfile,
      googleAuth,
      idKey: undefined
    }
    this.http.post<Auth>(this.baseURL, auth)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe(result => {
        this.store.dispatch(new ActionAuthLoginToken({ token: result.idKey }));
        this.token = result.idKey;
      });
  }

  public getToken(): string {
    return this.token;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


}
