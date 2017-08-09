import { ServerService } from './../server.service';
import { AccountService } from './../account/account.service';
import { User } from './../user';
import { Injectable, EventEmitter } from '@angular/core';



@Injectable()
export class LoginService {

    userId: number;
    user: User;
    constructor(private serverService: ServerService) {}
    userJson: any;

    getUser(email: string) {
        console.log(email);
        this.serverService.getUsers(email).subscribe(
            (response) => {
                let data = response.json();
                this.userId = +data.id;
                this.user = new User(this.userId, data.email, data.firstName, data.lastName)
                console.log(this.userId);
                return this.userId;
            },
            (error) => console.log(error)
        );
        //console.log('before return userId = ' + this.userId);
        //console.log(this.user.id);
        //return this.userId;
    }
}