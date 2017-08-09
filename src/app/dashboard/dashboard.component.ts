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

  caseView:Case;
  deviceView:Device;
  digitalMediaView:DigitalMedia;
  imageView:Image;

  constructor(private collapsible: CollapsibleService, private route: ActivatedRoute,
              private casesService: CasesService) { }

  ngOnInit() {
    this.paramSub = this.route.params.
      subscribe(
        (params: Params) => {
          this.curId = +params['userId'];
          this.casesService.setUserId(this.curId);
          console.log("dashboard id " + this.curId);
        }
      );
    this.collapsible.currentCase.subscribe(caseView => this.caseView = caseView); 
    this.collapsible.currentDevice.subscribe(deviceView => this.deviceView = deviceView);
    this.collapsible.currentDigitalMedia.subscribe(digitalMediaView => this.digitalMediaView = digitalMediaView);
    this.collapsible.currentImage.subscribe(imageView => this.imageView = imageView);
  }

  

}
