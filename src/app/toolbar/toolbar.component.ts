import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  //name = 'John Doe'; 
  //breadcrumbs = ['Dashboard'];

  /*
  isCase = true;
  isDevice = true;
  isDM = true;
  isImage = true;
  isFile = true;
  */

  caseView:boolean;
  deviceView:boolean;
  digitalMediaView:boolean;
  imageView:boolean;
  fileView:boolean;

  constructor(private breadcrumbs: BreadcrumbService) { }
  
  ngOnInit() {
    this.breadcrumbs.currentCase.subscribe(caseView => this.caseView = caseView);
    this.breadcrumbs.currentDevice.subscribe(deviceView => this.deviceView = deviceView);
    this.breadcrumbs.currentDigitalMedia.subscribe(digitalMediaView => this.digitalMediaView = digitalMediaView);
    this.breadcrumbs.currentImage.subscribe(imageView => this.imageView = imageView);
    this.breadcrumbs.currentFile.subscribe(fileView => this.fileView = fileView);
  }

  /*
  displayCaseBreadcrumb() {
    this.isDevice = this.isDM = this.isImage = this.isFile = false;
    this.isCase = true;
  }
  
  displayDeviceBreadcrumb() {
    this.isDM = this.isImage = this.isFile = false;
    this.isCase = this.isDevice = true;
  }

  displayDMBreadcrumb() {
    this.isImage = this.isFile = false;
    this.isCase = this.isDevice = this.isDM = true;
  }

  displayImageBreadcrumb() {
    this.isFile = false;
    this.isCase = this.isDevice = this.isDM = this.isImage = true;
  }

  displayFileBreadcrumb() {
    this.isCase = this.isDevice = this.isDM = this.isImage = this.isFile = true;
  }
  */

  displayCaseBreadcrumb() {
    this.breadcrumbs.viewCases();
  }
  
  displayDeviceBreadcrumb() {
    this.breadcrumbs.viewDevices();
  }

  displayDMBreadcrumb() {
    this.breadcrumbs.viewDigitalMedias();
  }

  displayImageBreadcrumb() {
    this.breadcrumbs.viewImages();
  }

  displayFileBreadcrumb() {
    this.breadcrumbs.viewFiles();
  }
}
 