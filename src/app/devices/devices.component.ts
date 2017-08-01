import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';
import { Device } from '../device';
import { CollapsibleService } from '../collapsible.service'; 
import { Case } from '../case';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  caseId: number;
  devices: Device[] = [];

  case: Case = new Case(); 
  newDevice = new Device();

  constructor(private breadcrumbs: BreadcrumbService,
              private collapsible: CollapsibleService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.breadcrumbs.viewDevices();
  }

  ngAfterViewInit() {
    this.route.queryParams.subscribe(
      params => setTimeout( () => { 
      this.case.dateReceived = params['dateReceived'],
      this.case.caseNumber = params['caseNumber'],
      this.case.caseDescription = params['caseDescription'],
      this.case.suspectName = params['suspectName'],
      this.case.examinerName = params['examinerName'],
      this.case.collectionLocation = params['collectionLocation'], 
      this.case.labId = params['labId'], 
      this.case.userId = params['userId']; this.collapsible.addCaseCollapsible(this.case); }, 0),
    error => this.case = null);

    console.log(this.case); 
  }

  postDevice() {
    console.log(this.newDevice);
    this.addDevice(this.newDevice);
  }

  addDevice(newDevice: Device) {
    this.devices.push(newDevice);
    this.newDevice = new Device;
    console.log("Device posted");
  }
}
