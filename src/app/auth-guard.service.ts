import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { LoginService } from './login/login.service';
import { Observable } from 'rxjs/Observable';

@Injectable()

/**
 * The AuthGuard Service simply calls out to the login service to verify if a user 
 * has logged in. If the login service isAuthenticated() method returns false, the
 * then the user is redirected to the login/home page.
 **/
export class AuthGuard implements CanActivate {
    constructor(private loginService: LoginService, private route: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean {
        return this.loginService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if(authenticated) {
                        return true;
                    } else {
                        this.route.navigate(['/']);
                    }
                }
            );
            
    }
}