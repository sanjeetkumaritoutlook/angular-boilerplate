import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

type LoggingFunction = (value: any, ...rest: any[]) => void;
export interface LoggerService {
  info: LoggingFunction;
  log: LoggingFunction;
  warn: LoggingFunction;
  error: LoggingFunction;
}

@Injectable({ providedIn: 'root' })
export class BrowserLoggerService implements LoggerService {
  info(value: any, ...rest: any[]): void {
    if (!environment.production) {
      // tslint:disable-next-line:no-console
      console.info(value, rest);
    } else {
      // App Insights or your favorite service
    }
  }

  log(value: any, ...rest: any[]): void {
    if (!environment.production) {
      console.log(value, rest);
    } else {
      // App Insights or your favorite service
    }
  }

  warn(value: any, ...rest: any[]): void {
    if (!environment.production) {
      console.warn(value, rest);
    } else {
      // App Insights or your favorite service
    }
  }

  clear(value: any, ...rest: any[]): void {
    if (!environment.production) {
      console.clear();
    }
  }

  error(error: any, ...rest: any[]): void {
    const date = new Date().toUTCString();
    if (error instanceof HttpErrorResponse) {
      //  A server-side error
      console.error(date, 'There was an HTTP error.', error.message, 'Status code:', error.status);
    } else if (error instanceof TypeError) {
      console.error(date, 'There was a Type error.', error.message, error.stack);
    } else if (error instanceof Error) {
      console.error(date, 'There was a general error.', error.message, error.stack);
    } else if (error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(date, 'There was a general error.', error.message);
    } else {
      console.error(date, 'Nobody threw an Error but something happened!', error.message, error.stack);
    }
  }

}
