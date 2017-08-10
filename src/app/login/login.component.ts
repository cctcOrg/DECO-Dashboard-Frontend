import { Router, ActivatedRoute } from '@angular/router';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { LoginService } from './login.service';
import { AccountService } from './../account/account.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  constructor(private loginService: LoginService) { }


  ngOnInit() {
  }

  onLogin() { 
    this.loginService.login(this.email);
  }

}
