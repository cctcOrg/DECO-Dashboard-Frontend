import { Component, OnInit } from '@angular/core';
import {User} from '../user';

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

  constructor(private serverService: ServerService,
              private toastService: MzToastService,
              private breadcrumbs: BreadcrumbService,
              private collapsible: CollapsibleService) { }

  ngOnInit() {
    // Remove all breadcrumbs except Cases in case we're N levels deep w/ the cards
    setTimeout( () => {
      this.breadcrumbs.viewCases();
    });
  }

  ngAfterViewInit() {
    Promise.resolve(null).then( () => this.collapsible.removeAllCollapsible() );
  }
  
  putUser() {    
    this.serverService.putUser(this.user.email, this.user).subscribe(
      (error) => this.toastService.show('ERROR: User not modified!', 4000)
    )
  }
}
