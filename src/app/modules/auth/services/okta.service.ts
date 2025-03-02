import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { OktaAuth } from '@okta/okta-auth-js';
//import { OktaConfig } from '../../../constants/constant';
import { SecureStorageService } from 'src/app/core/services/secure-storage.service';

@Injectable({
  providedIn: 'root'
})
export class Okta {
  private authClient = new OktaAuth({
    issuer: 'https://capgemini-okta.okta.com/oauth2/default',  // Directly using the URL
    clientId: '0oaufg5w0212MhpUU5d6'  // Directly using Client ID
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
    const token = this.sessionToken.getValue();
    return token ? token : '';
  }

  
  // async login(): Promise<void> {
  //   const username = 'admin@gmail.com';
  //   const password = 'admin@123';

  //   try {
  //     const transaction = await this.authClient.signIn({ username, password });

  //     if (transaction.status !== 'SUCCESS') {
  //       throw new Error(`Login failed: ${transaction.status}`);
  //     }

  //     this.isAuthenticated.next(true);
  //     this.sessionToken.next(transaction.sessionToken);
  //     this.secureStorage.secureSessionStorage.setItem('sessionToken', transaction.sessionToken);
  //     this.authClient.session.setCookieAndRedirect(transaction.sessionToken);
  //   } catch (err) {
  //     console.error('Login error:', err);
  //   }
  // }

  // async logout(redirect: string): Promise<void> {
  //   try {
  //     await this.authClient.signOut();
  //     this.isAuthenticated.next(false);
  //     await this.router.navigate([redirect]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  //Mock Login
  // just want a fake login for development, you can remove Okta and replace it with a local check:
  async login(username: string, password: string): Promise<void> {
    if (username === 'admin@gmail.com' && password === 'admin@123') {
      this.isAuthenticated.next(true);
      this.sessionToken.next('mock-session-token-123');
      this.secureStorage.secureSessionStorage.setItem('sessionToken', 'mock-session-token-123');
      this.router.navigate(['/dashboard']);  // Redirect after login
    } else {
      throw new Error('Invalid Credentials');
    }
  }

  async logout(): Promise<void> {
    this.isAuthenticated.next(false);
    this.secureStorage.secureSessionStorage.removeItem('sessionToken');
    this.router.navigate(['/login']);  // Redirect to login after logout
  }
}
