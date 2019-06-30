import { Injectable } from '@angular/core';
import { BasicProfile } from '../google-auth/basic-profile';
import { GoogleAuth } from '../google-auth/google-auth';
import { throwError, Observable } from 'rxjs';
import { Auth } from './auth';
import { environment as env } from '@env/environment';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../core.state';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthServiceService {
  baseURL = env.apiUrl + '/google-auth';
  token = '';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  addAuth(
    basicProfile: BasicProfile,
    googleAuth: GoogleAuth
  ): Observable<Auth> {
    const auth: Auth = {
      basicProfile,
      googleAuth,
      idKey: undefined
    };
    return this.http.post<Auth>(this.baseURL, auth).pipe(
      tap(t => (this.token = t.idKey)),
      catchError(this.handleError)
    );
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
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
