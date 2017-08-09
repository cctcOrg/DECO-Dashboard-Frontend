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

  userId: number;
  constructor(private serverService: ServerService, private loginService: LoginService,
              private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
  }
  email: string = "";

  onLogin() { 
    this.loginService.login(this.email);
  }

}
