import { ActivatedRoute, Router } from '@angular/router';
import { CasesService } from './../cases/cases.service';
import { Component, OnInit, Input } from '@angular/core';
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
  @Input() user: User = new User(0, "", "", "");
  userId: number;
  @Input() newEmail: string = "";

  constructor(private serverService: ServerService,
              private casesService: CasesService,
              private toastService: MzToastService,
              private breadcrumbs: BreadcrumbService,
              private collapsible: CollapsibleService) { }

  ngOnInit() {
    this.getUserInfo();
    
    // Remove all breadcrumbs except Cases in case we're N levels deep w/ the cards
    setTimeout( () => {
      this.breadcrumbs.viewCases();
    });
  }

  ngAfterViewInit() {
    Promise.resolve(null).then( () => this.collapsible.removeAllCollapsible() );
  }
  
  getUserInfo() {
    var email;
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

  resetForm() {
    console.log("WELL MET");
    this.newEmail = "";
  }

  putUser() {  
    var oldEmail = this.user.email;
    
    // User entered new email, set new email in JSON
    if (this.newEmail != "") {
      this.user.email = this.newEmail;
    }
    
    this.serverService.putUser(oldEmail, this.user).subscribe(
      (response) => this.toastService.show('Changes saved!', 4000),
      (error) => this.toastService.show('ERROR: User not modified!', 4000)
    );

    this.newEmail = "";
  }
}