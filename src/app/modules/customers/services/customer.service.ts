import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { AppConfigService } from 'src/app/app-config.service';
import { BrowserLoggerService } from 'src/app/core/services/browser-logger.service';
import { HttpErrorHandlerService } from 'src/app/core/services/http-error-handler.service';
import { LoadingIndicatorService } from 'src/app/shared-component/loading-indicator/loading-indicator.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string;
  constructor(private httpClient: HttpClient, private appConfigService: AppConfigService,
              private loadingIndicatorService: LoadingIndicatorService,
              private browserLogger: BrowserLoggerService,
              private error: HttpErrorHandlerService) {
    this.baseUrl = this.appConfigService.getBaseUrl;
   }
  getCustomersList(): Observable<any[]>{
    let headers: HttpHeaders = new HttpHeaders();
    this.loadingIndicatorService.showLoadingIndicator('Fetching the first thing');
    headers = headers.append('Accept', 'application/json');
    return this.httpClient.get(this.baseUrl + 'users', { headers }
    ).pipe(
      tap(() => this.browserLogger.info('fetching customet data')),
      // Simulate a second two second API call
      map((data: any[]) => {
        return data;
      }), catchError(error => {
        const errorMsg = this.error.getServerErrorMessage(error);
        return throwError(errorMsg);
      }),
      /* Hide the loading indicator upon completion of both of the simulated API
      calls, regardless of whether the operation succeeded or failed. */
      // finalize(() => this.loadingIndicatorService.hideLoadingIndicator())
    );
  }
}
