import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { LoginService } from './login/login.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
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