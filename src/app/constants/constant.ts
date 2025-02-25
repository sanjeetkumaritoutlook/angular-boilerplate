
export const OktaConfig = {
  clientId: `0oaufg5w0212MhpUU5d6`,
  issuer: `https://capgemini-okta.okta.com/oauth2/default`,
  redirectUri: 'http://localhost:4200/login',
};

export const STORAGE_SECRET_KEY = 'this_is_secret_key_for_secure_storage';

export const PageNotFound = {
  Title: 'Ooops, Page Not Found',
  Subtitle: 'Please, return to the previous page',
  Button: 'Go back'
};

export const languages = [
{value: 'en', viewValue: 'English'},
{value: 'fr', viewValue: 'French'},
{value: 'es', viewValue: 'Spanish'}
];

export const langArray = ['en', 'fr', 'es'];

export const customerTableCol = ['id', 'name', 'username', 'email', 'phone', 'company'];

export const httpStatus = [{
  statusCode: 200,
  status: 'OK',
  message: 'Standard response for successful HTTP requests'
}, {
  statusCode: 201,
  status: 'Created',
  message: 'The request has been fulfilled, resulting in the creation of a new resource.'
}, {
  statusCode: 202,
  status: 'Accepted',
  message: 'The request has been accepted for processing, but the processing has not been completed.'
}, {
  statusCode: 204,
  status: 'No Content',
  message: 'The server successfully processed the request, and is not returning any content.'
}, {
  statusCode: 400,
  status: 'Bad Request',
  message: 'The server cannot or will not process the request due to an apparent client error.'
}, {
  statusCode: 401,
  status: 'Unauthorized',
  message: 'The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.'
}, {
  statusCode: 403,
  status: 'Forbidden',
  message: 'The request contained valid data and was understood by the server, but the server is refusing action. '
}, {
  statusCode: 404,
  status: 'Not Found',
  message: 'The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.'
}, {
statusCode: 500,
status: 'Internal Server Error',
message: 'Internal Server Error.'
}];
