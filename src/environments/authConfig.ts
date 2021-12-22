import { AuthConfig } from "angular-oauth2-oidc";

// holoyis165@bulkbye.com
// placki777


export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  // issuer: 'https://idsvr4.azurewebsites.net',
  oidc: false,
  clearHashAfterLogin: false,
  // customQueryParams:{},
  loginUrl: 'https://accounts.spotify.com/authorize',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'caad159089794508a6aa1d13099763f3',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',
  responseType: 'token',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'playlist-modify-private playlist-read-collaborative playlist-read-private  playlist-modify-public',

  showDebugInformation: true,
};
