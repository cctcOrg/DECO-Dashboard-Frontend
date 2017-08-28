import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ServerService } from './../server.service';

@Injectable()

/**
 * The login service is used as a means of authenticating a user. When the login method is called,
 * it grabs the email and makes a get request to the backend to grab the associated userId and then
 * navigates to the dashboard page. 
 * TO DO: ADD PASSWORD ENCYPTION.
 */
export class LoginService {
    constructor(private serverService: ServerService,
        private router: Router) { }

    isLogin: boolean = false;
    userId: number;

    login(email: string) {
        this.isLogin = true;
        console.log(email);
        this.serverService.getUserByEmail(email).subscribe(
            (response) => {
                let data = response.json();
                this.userId = +data.id;
                this.router.navigate(['/dashboard', this.userId, 'cases']);
            },
            (error) => console.log(error)
        );
    }
    // this method is called by the AuthGuard Service and just checks if the status
    // of the isLogin variable. This ensures only logged in users can view the dashboard,
    // and only cases relavent to their account.
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.isLogin);
                }, 0)
            }
        );
        return promise;
    }
}