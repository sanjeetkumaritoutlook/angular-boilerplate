
# AngularBoilerplate

  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

  
## Okta Authentication API.
Okta is an identity provider (IdP), and authentication is handled on Okta’s side.
https://login.okta.com/
https://developer.okta.com/signup/
auth0
Parent organization: Okta



The Okta Authentication API provides operations to authenticate users, perform multifactor enrollment and verification, recover forgotten passwords, and unlock accounts. It can be used as a standalone API to provide the identity layer on top of your existing application, or it can be integrated with the Okta Sessions API (opens new window)to obtain an Okta session cookie and access apps within Okta.

addresses the following key scenarios:

Primary authentication allows you to verify the username and password credentials for a user.

Multifactor authentication (MFA) strengthens the security of password-based authentication by requiring additional verification of another Factor such as a temporary one-time passcode or an SMS passcode. The Authentication API supports user enrollment with MFA factors enabled by the administrator, and MFA challenges based on your global session policy.

Recovery allows users to securely reset their password if they've forgotten it, or unlock their account if it has been locked out due to excessive failed login attempts. This functionality is subject to the security policy set by the administrator.

 Okta does not provide public issuers and client IDs that work universally. Each issuer and client ID is tied to a specific Okta tenant (organization) and must be set up properly in Okta.

🔹 Alternative Approaches


## Development server

set node_options=--openssl-legacy-provider


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

  

## Code scaffolding

  

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

  

## Build

  

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

  

## Running unit tests

  

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

  

## Running end-to-end tests

  

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

  

## Installation setup

 - Import boilerplate code into VScode
 - Install node modules
	npm i
 - ng serve
 - Run below command for Unit test
	ng test --no-watch --code-coverage
	Coverage report generated in \coverage\<app-name>\index.html
 - Production build
	ng build --prod
	
## List of Features

 - Login Service ( with Okta service )
 - Web Push Notification
 - Firebase Integration (CURD)
 - Secure Storage Service
 - Logger Service
 - Karma Configuration (UT)
 - Shared Component (header, language selector, page not found)
 - Error Handling
 - Loading Indicator
 - Auth Guard
 - Auth Interceptor
 - Navigation
 - Standard HTML/CSS for layouts, stylesheets , themes and palettes
 - i18N Implementation (en, es, fr)
 - Mock backend API
 - Lazy Loading
 - Reactive Form Validation Example

