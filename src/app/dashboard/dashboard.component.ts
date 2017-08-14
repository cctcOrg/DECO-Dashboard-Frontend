import { CasesService } from './../cases/cases.service';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Case } from '../case';
import { Device } from '../device'; 
import { DigitalMedia } from '../digital-media'; 
import { Image } from '../image';
import { File } from '../file'; 
import { Subscription } from 'rxjs/Subscription';

import { CollapsibleService } from '../collapsible.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isHomePage = true;
  curId: number;
  paramSub: Subscription;

  constructor(private collapsible: CollapsibleService, private route: ActivatedRoute,
              private casesService: CasesService) { }

  ngOnInit() {
    this.paramSub = this.route.params.
      subscribe(
        (params: Params) => {
          this.curId = +params['userId'];
          this.casesService.setUserId(this.curId);
        }
      );
  }
}
