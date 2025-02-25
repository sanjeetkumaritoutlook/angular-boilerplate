import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { Okta } from 'src/app/modules/auth/services/okta.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router, public authService: Okta){}
  // tslint:disable-next-line:typedef
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      if (!await this.authService.checkAuthenticated()) {
        await this.router.navigate(['login']);
        return false;
      }
      return true;
  }

}
