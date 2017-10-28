import { AuthorizationService } from './../services/authorization.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private authorizationService: AuthorizationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const userLogged = this.authorizationService.isAuthorized();
    if (userLogged) {
      return true;
    }
    return false;
  }
}
