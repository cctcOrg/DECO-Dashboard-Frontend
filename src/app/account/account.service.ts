import { ServerService } from './../server.service';
import { User } from './../user';
import { EventEmitter, Injectable } from '@angular/core';


@Injectable()
export class AccountService {
    //userToPost = new EventEmitter<User>();
    
    currMakingAcc = true;
    /*
    email: string = "test1";
    first: string = "test2";
    last: string = "test3";*/

    //newUser: User;

    /*
    finishAccount() {
        this.currMakingAcc = false;
    }
    makeUser(email: string, first: string, last:string ) {
        this.email = email;
        this.first = first;
        this.last = last;
        this.newUser = {
            email: this.email,
            firstName: this.first,
            lastName: this.last
        };
        this.userToPost.emit(this.newUser);
    }*/

    constructor(private serverService: ServerService) {}

    userJson : any;
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