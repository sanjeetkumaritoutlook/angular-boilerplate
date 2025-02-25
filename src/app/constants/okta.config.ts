
export default {
  oidc: {
    clientId: `0oary1kvtkzVGqOq45d6`,
    issuer: `https://capgemini-login.okta.com/oauth2/default`,
    redirectUri: 'http://localhost:4200/login',
    scopes: ['openid', 'profile', 'email'],
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};



// export default {
//   oidc: {
//     clientId: `0oaufg5w0212MhpUU5d6`,
//     issuer: `https://capgemini-okta.okta.com/oauth2/default`,
//     redirectUri: 'http://localhost:4200/login',
//     scopes: ['openid', 'profile', 'email'],
//   },
//   resourceServer: {
//     messagesUrl: 'http://localhost:8000/api/messages',
//   },
// };