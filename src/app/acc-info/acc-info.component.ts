import { ActivatedRoute, Router } from '@angular/router';
import { CasesService } from './../cases/cases.service';
import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { Response } from '@angular/http';

import { ServerService } from '../server.service';
import { MzToastService } from 'ng2-materialize';
import { BreadcrumbService } from '../breadcrumb.service';
import { CollapsibleService } from '../collapsible.service';

@Component({
  selector: 'app-acc-info',
  templateUrl: './acc-info.component.html',
  styleUrls: ['./acc-info.component.css']
})
export class AccInfoComponent implements OnInit {
  user: User;
  userId: number;
  newEmail: string = "";

  constructor(private serverService: ServerService,
              private casesService: CasesService,
              private toastService: MzToastService,
              private breadcrumbs: BreadcrumbService,
              private collapsible: CollapsibleService) { }

  ngOnInit() {
    // Remove all breadcrumbs except Cases in case we're N levels deep w/ the cards
    setTimeout( () => {
      this.breadcrumbs.viewCases();
    });

    this.getUserInfo();
  }

  ngAfterViewInit() {
    Promise.resolve(null).then( () => this.collapsible.removeAllCollapsible() );
  }
  
  getUserInfo() {
    this.userId = this.casesService.getUserId();

    console.log("User ID: " + this.userId);

    this.serverService.getUserById(this.userId).subscribe(
      (response: Response) => {
        const data = response.json();
        console.log(data);

        this.user = new User(this.userId, 
                             data.email, 
                             data.firstName, 
                             data.lastName);
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
