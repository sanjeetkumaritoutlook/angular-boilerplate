import { TestBed } from '@angular/core/testing';

import { BrowserLoggerService } from './browser-logger.service';

describe('BrowserLoggerService', () => {
  let service: BrowserLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
