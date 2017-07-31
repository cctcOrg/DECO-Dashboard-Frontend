import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  name = 'John Doe'; 
  breadcrumbs = ['Dashboard']; 
  isCase = true;
  isDevice = true;
  isDM = true;
  isImage = true;
  isFile = true;
  
  constructor() { }

  @Output() caseEvent = new EventEmitter();
  @Output() deviceEvent = new EventEmitter();
  @Output() dmEvent = new EventEmitter();
  @Output() imageEvent = new EventEmitter();
  @Output() fileEvent = new EventEmitter();
  
  ngOnInit() {
  }

  displayCaseBreadcrumb() {
    this.caseEvent.emit(null);
    this.isDevice = this.isDM = this.isImage = this.isFile = false;
    this.isCase = true;
  }
  
  displayDeviceBreadcrumb() {
    this.deviceEvent.emit(null);
    this.isDM = this.isImage = this.isFile = false;
    this.isCase = this.isDevice = true;
  }

  displayDMBreadcrumb() {
    this.dmEvent.emit(null);
    this.isImage = this.isFile = false;
    this.isCase = this.isDevice = this.isDM = true;
  }

  displayImageBreadcrumb() {
    this.imageEvent.emit(null);
    this.isFile = false;
    this.isCase = this.isDevice = this.isDM = this.isImage = true;
  }

  displayFileBreadcrumb() {
    this.fileEvent.emit(null);
    this.isCase = this.isDevice = this.isDM = this.isImage = this.isFile = true;
  }
}
