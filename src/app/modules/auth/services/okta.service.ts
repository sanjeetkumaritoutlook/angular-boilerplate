import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { OktaAuth } from '@okta/okta-auth-js';
import { OktaConfig } from '../../../constants/constant';
import { SecureStorageService } from 'src/app/core/services/secure-storage.service';

@Injectable({
  providedIn: 'root'
})
export class Okta {
  private authClient = new OktaAuth({
    issuer: OktaConfig.issuer,
    clientId: OktaConfig.clientId
  });
  public isAuthenticated = new BehaviorSubject<boolean>(false);
  public sessionToken = new BehaviorSubject<string>('');

  constructor(private router: Router, private secureStorage: SecureStorageService) {}

  async checkAuthenticated(): Promise<boolean> {
    const authenticated = await this.authClient.session.exists();
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }

  async sessionLoginToken(): Promise<string> {
    this.sessionToken.next('');
    return '';
  }

  async login(username: string, password: string): Promise<void> {
    const transaction = await this.authClient.signIn({username, password});

    if (transaction.status !== 'SUCCESS') {
      throw Error('We cannot handle the ' + transaction.status + ' status');
    }
    this.isAuthenticated.next(true);
    this.sessionToken.next(transaction.sessionToken);
    this.secureStorage.secureSessionStorage.setItem('sessionToken', transaction.sessionToken);
    this.authClient.session.setCookieAndRedirect(transaction.sessionToken);
  }

  async logout(redirect: string): Promise<void> {
    try {
      await this.authClient.signOut();
      this.isAuthenticated.next(false);
      await this.router.navigate([redirect]);
    } catch (err) {
      console.error(err);
    }
  }
}
