What This Service Does

Manages user authentication state using BehaviorSubject.

BehaviorSubject<boolean> → Holds authentication state (true or false).
BehaviorSubject<string> → Holds session token.


Logs users in with Okta via signIn(username, password).

Handles session tokens securely using SecureStorageService.

Checks authentication status using checkAuthenticated().

Logs users out via signOut() and redirects them.

Log in to Okta Admin Console
----------------------
https://login.okta.com/
https://developer.okta.com/signup/
auth0

## Tenant Domain
dev-cwz73k67rkm2u7u0 .us.auth0.com

Region :US


Go to Okta Admin Console (or your custom Okta domain, e.g., https://yourcompany.okta.com).
Sign in with your admin credentials.
Check Users & Groups

Navigate to Directory → People.
Here, you'll find a list of users and their associated emails.
Reset Password (If Needed)

If you forgot the password for a user, click on the user, then select Reset password.
✅ If your email exists in Okta, you can use it along with the correct password to log in.
