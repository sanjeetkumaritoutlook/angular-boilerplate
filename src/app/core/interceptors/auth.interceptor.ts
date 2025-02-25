import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Okta } from 'src/app/modules/auth/services/okta.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public authService: Okta) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.sessionLoginToken();
    const authReq = request.clone({
      headers: request.headers.set('Authorization', 'bearer:' + authToken)
    });
    return next.handle(request);
  }
}
