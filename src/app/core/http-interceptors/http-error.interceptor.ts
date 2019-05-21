import { Injectable, Injector, ErrorHandler } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiAuthServiceService } from '../api-service/api-auth-service.service';

/** Passes HttpErrorResponse to application-wide error handler */
@Injectable()
export default class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private apiAuthServiceService: ApiAuthServiceService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.apiAuthServiceService.getToken()}`
      }
    });

    return next.handle(request).pipe(
      tap(null, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          const appErrorHandler = this.injector.get(ErrorHandler);
          appErrorHandler.handleError(err);
        }
      })
    );
  }
}
