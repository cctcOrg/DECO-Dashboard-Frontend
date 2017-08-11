import { ServerService } from './../server.service';
import { User } from './../user';
import { EventEmitter, Injectable } from '@angular/core';


@Injectable()
export class AccountService {
    
    currMakingAcc = true;
    userJson : any;

    constructor(private serverService: ServerService) {}

<<<<<<< HEAD
    userJson: any;
    postNewUser(email: string, first: string, last: string, passwordHash: string) {
=======
    postNewUser(email: string, first: string, last:string ) {
>>>>>>> b884441f233749fa99c47957fa454bec56c08c8f
        this.userJson = {
            "email": email,
            "firstName": first,
            "lastName": last,
            "passwordHash": passwordHash
        };
        this.serverService.postUser(this.userJson).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }
}