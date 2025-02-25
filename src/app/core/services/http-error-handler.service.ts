import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpStatus } from 'src/app/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor() { }

  public getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case httpStatus[3].statusCode: {
        return `${httpStatus[3].status}: ${error.message}`;
      }
      case httpStatus[4].statusCode: {
        return `${httpStatus[4].status}: ${error.message}`;
      }
      case httpStatus[5].statusCode: {
        return `${httpStatus[5].status}: ${error.message}`;
      }
      case httpStatus[6].statusCode: {
        return `${httpStatus[6].status}: ${error.message}`;
      }
      case httpStatus[7].statusCode: {
        return `${httpStatus[7].status}: ${error.message}`;
      }
      case httpStatus[8].statusCode: {
        return `${httpStatus[8].status}: ${error.message}`;
      }
      case httpStatus[4].statusCode: {
        return `${httpStatus[4].status}: ${error.message}`;
      }
      default: {
          return `Unknown Server Error: ${error.message}`;
      }

    }
  }
}
