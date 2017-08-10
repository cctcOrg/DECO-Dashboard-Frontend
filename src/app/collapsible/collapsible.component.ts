import { Component, OnInit } from '@angular/core';

import { CollapsibleService } from '../collapsible.service';
import { Case } from '../case';
import { Device } from '../device'; 
import { DigitalMedia } from '../digital-media'; 
import { Image } from '../image';
import { File } from '../file'; 

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {
  
  caseView:Case;
  deviceView:Device;
  digitalMediaView:DigitalMedia;
  imageView:Image;

  // Specifies what collapsibles are open and closed programmatically
  activeCase: boolean;
  activeDevice: boolean;
  activeDigitalMedia: boolean;
  activeImage: boolean;

  constructor(private collapsible: CollapsibleService) { }

  ngOnInit() {
    this.collapsible.currentCase.subscribe(caseView => this.caseView = caseView); 
    this.collapsible.currentDevice.subscribe(deviceView => this.deviceView = deviceView);
    this.collapsible.currentDigitalMedia.subscribe(digitalMediaView => this.digitalMediaView = digitalMediaView);
    this.collapsible.currentImage.subscribe(imageView => this.imageView = imageView);

    this.collapsible.activeCase.subscribe(activeCase => this.activeCase = activeCase); 
    this.collapsible.activeDevice.subscribe(activeDevice => this.activeDevice = activeDevice);
    this.collapsible.activeDigitalMedia.subscribe(activeDigitalMedia => this.activeDigitalMedia = activeDigitalMedia);
    this.collapsible.activeImage.subscribe(activeImage => this.activeImage = activeImage);

    console.log(this.caseView)
    console.log(this.deviceView)
    console.log(this.digitalMediaView)
    console.log(this.imageView)
  }

}
