import { ServerService } from './../server.service';
import { User } from './../user';
import { EventEmitter, Injectable } from '@angular/core';


@Injectable()
export class AccountService {
    
    currMakingAcc = true;
    userJson : any;

    constructor(private serverService: ServerService) {}

    postNewUser(email: string, first: string, last:string ) {
        this.userJson = {
            "email": email,
            "firstName": first,
            "lastName": last 
        };
        this.serverService.postUser(this.userJson).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
    }
}