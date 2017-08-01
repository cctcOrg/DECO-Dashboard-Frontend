import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';
import { Device } from '../device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  caseId: number;
  devices: Device[] = [];


  newDevice = new Device();

  constructor(private breadcrumbs: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbs.viewDevices();
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
