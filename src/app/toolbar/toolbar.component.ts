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
  
  ngOnInit() {
  }

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
}
