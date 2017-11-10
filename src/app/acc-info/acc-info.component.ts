import { MzToastService } from 'ng2-materialize';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from './../server.service';
import { CasesService } from './../cases/cases.service';
import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { Response } from '@angular/http';

@Component({
  selector: 'app-acc-info',
  templateUrl: './acc-info.component.html',
  styleUrls: ['./acc-info.component.css']
})
export class AccInfoComponent implements OnInit {

  user: User;
  
  userId: number;
  newEmail: string;
  //oldPassword: string;
  //newPassword: string;

  constructor(private serverService: ServerService,
              private casesService: CasesService,
              private toastService: MzToastService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getUserInfo();
  }
  
  getUserInfo() {
    this.userId = this.casesService.getUserId();

    this.serverService.getUserById(this.userId).subscribe(
      (response: Response) => {
        const data = response.json();
        console.log(data);

        this.user.firstName = data.firstName;
        this.user.lastName = data.lastName;
        this.user.email = data.email;
      },
      (error) => console.log(error)
    );
  }

  putUser() {    
    this.serverService.putUser(this.user.email, this.user).subscribe(
      (error) => this.toastService.show('ERROR: User not modified!', 4000)
    )
  }

}
