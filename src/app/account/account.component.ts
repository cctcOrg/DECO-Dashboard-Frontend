import { AccountService } from './account.service';
import { Component, OnInit } from '@angular/core';
import {User} from '../user';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  currMakingAcc: boolean = true;

  email: string = "";
  first: string = "";
  last: string = "";

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  // Bound to Create Account button 
  setAccount() {
    this.accountService.postNewUser(this.email, this.first, this.last);
  }

}
