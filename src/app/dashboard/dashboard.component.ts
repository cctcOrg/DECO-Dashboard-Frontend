import { Component, OnInit } from '@angular/core';
import { Case } from '../case';
import { Device } from '../device'; 
import { DigitalMedia } from '../digital-media'; 
import { Image } from '../image';
import { File } from '../file'; 

import { CollapsibleService } from '../collapsible.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isHomePage = true;

  caseView:Case;
  deviceView:Device;
  digitalMediaView:DigitalMedia;
  imageView:Image;

  constructor(private collapsible: CollapsibleService) { }

  ngOnInit() {
    this.collapsible.currentCase.subscribe(caseView => this.caseView = caseView); 
    this.collapsible.currentDevice.subscribe(deviceView => this.deviceView = deviceView);
    this.collapsible.currentDigitalMedia.subscribe(digitalMediaView => this.digitalMediaView = digitalMediaView);
    this.collapsible.currentImage.subscribe(imageView => this.imageView = imageView);
  }

  

}
