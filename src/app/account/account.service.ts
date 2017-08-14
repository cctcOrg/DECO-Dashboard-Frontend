import { ServerService } from './../server.service';
import { User } from './../user';
import { EventEmitter, Injectable } from '@angular/core';
import { MzToastService } from 'ng2-materialize';

@Injectable()
export class AccountService {
    
    currMakingAcc = true;
    userJson : any;

    constructor(private serverService: ServerService,
                private toastService: MzToastService) {}

    postNewUser(email: string, first: string, last:string, passwordHash:string) {
        this.userJson = {
            "email": email,
            "firstName": first,
            "lastName": last,
            "passwordHash": passwordHash
        };
        this.serverService.postUser(this.userJson).subscribe(
            (response) => console.log(response),
            (error) => this.toastService.show('ERROR: Required fields not filled or duplicate emails not allowed', 3000)
        );
    }
}