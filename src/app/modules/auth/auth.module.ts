import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginService } from './services/login.service';
import { SharedComponentModule } from 'src/app/shared-component/shared-component.module';


@NgModule({
  declarations: [LoginComponent, SignUpComponent, ResetPasswordComponent],
  imports: [
  CommonModule,
    AuthRoutingModule,
    SharedComponentModule
  ],
  providers: [LoginService]
})
export class AuthModule { }
