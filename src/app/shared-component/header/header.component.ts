import { Component, OnInit } from '@angular/core';
import { Okta } from 'src/app/modules/auth/services/okta.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  constructor(public authService: Okta) {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
   }
  language = localStorage.getItem('locale') || 'en';

  changeLanguage(e): void {
    // Reload app for selected language
    localStorage.setItem('locale', e.target.value);
    window.open('/', '_self');
  }
  async ngOnInit(): Promise<void> {
    // this.oktaAuth
    this.isAuthenticated = await this.authService.checkAuthenticated();
  }

  async logout(): Promise<void> {
    await this.authService.logout('/l');
  }

}

