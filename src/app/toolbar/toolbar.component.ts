import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  caseView:boolean;
  deviceView:boolean;
  digitalMediaView:boolean;
  imageView:boolean;
  fileView:boolean;

  userId = 3;
  caseId:number;
  deviceId:number;
  digitalMediaId:number;
  imageId:number;
  fileId:number;

  constructor(private breadcrumbs: BreadcrumbService) { }
  
  ngOnInit() {
    this.breadcrumbs.currentCase.subscribe(caseView => this.caseView = caseView);
    this.breadcrumbs.currentDevice.subscribe(deviceView => this.deviceView = deviceView);
    this.breadcrumbs.currentDigitalMedia.subscribe(digitalMediaView => this.digitalMediaView = digitalMediaView);
    this.breadcrumbs.currentImage.subscribe(imageView => this.imageView = imageView);
    this.breadcrumbs.currentFile.subscribe(fileView => this.fileView = fileView);

    this.breadcrumbs.currentCaseId.subscribe(caseId => this.caseId = caseId);
    this.breadcrumbs.currentDeviceId.subscribe(deviceId => this.deviceId = deviceId);
    this.breadcrumbs.currentDigitalMediaId.subscribe(digitalMediaId => this.digitalMediaId = digitalMediaId);
    this.breadcrumbs.currentImageId.subscribe(imageId => this.imageId = imageId);
    this.breadcrumbs.currentFileId.subscribe(fileId => this.fileId = fileId);
  }
}