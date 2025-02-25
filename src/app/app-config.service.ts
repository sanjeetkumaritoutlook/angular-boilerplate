import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private http: HttpClient) { }
  private config: any;
  loadAppConfig() {
    return this.http.get('./assets/config.json')
      .toPromise()
      .then(data => {
        this.config = data;
      });
  }

  get getBaseUrl() {
    if (!this.config) {
      throw Error('Config file not loaded!');
    }
    return this.config.mockBackend;
  }

}
