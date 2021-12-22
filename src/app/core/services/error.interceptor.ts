import { ErrorHandler, Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { API_URL } from '../tokens';


// ng g interceptor core/services/error

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private errorHandler: ErrorHandler,
    @Inject(API_URL) private api_url: string,
    private auth: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authReq = request.clone({
      // TODO: check if url starts with http?
      url: this.api_url + request.url,
      // setHeaders: {
      //   Authorization: `Bearer ${this.auth.getToken()}`
      // }
    })


    return next.handle(authReq).pipe(
      catchError(error => {
        this.errorHandler.handleError(error)

        if (!(error instanceof HttpErrorResponse)) {
          throw new Error('Unexpected error')
        }
        if (!isSpotifyError(error.error)) {
          throw new Error('Unexpected error')
        }

        if (error.status === 401) {
          this.auth.login()
          // TODO: await popupLogin()
          //  request.clone({... newToken
          // return next.handle(authReq)...
        }

        // TODO: exponential backoff rxjs

        const spotifyError = error.error.error.message
        return throwError(() => new Error(spotifyError))
      })
    )
  }
}


interface SpotifyError {
  error: {
    message: string
  }
}

function isSpotifyError(error: Error | SpotifyError): error is SpotifyError {
  return 'error' in error && 'message' in error.error
}
