import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private oauth: OAuthService
  ) {
    this.oauth.configure(environment.authConfig)
  }

  async init() {
    await this.oauth.tryLoginImplicitFlow()

    if (!this.oauth.getAccessToken()) {
      this.login()
    }
  }

  login() {
    this.oauth.initLoginFlow()
  }

  logout() {
    this.oauth.logOut()
  }

  getToken() {
    return this.oauth.getAccessToken()
  }
}
