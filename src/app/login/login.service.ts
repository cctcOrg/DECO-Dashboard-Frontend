import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ServerService } from './../server.service';

@Injectable()
export class LoginService {
    constructor(private serverService: ServerService,
        private router: Router) { }
    isLogin: boolean = false;
    userId: number;

    login(email: string) {
        this.isLogin = true;
        console.log(email);
        this.serverService.getUsers(email).subscribe(
            (response) => {
                let data = response.json();
                this.userId = +data.id;
                //this.user = new User(this.userId, data.email, data.firstName, data.lastName)
                this.router.navigate(['/dashboard', this.userId, 'cases']);
            },
            (error) => console.log(error)
        );
    }
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