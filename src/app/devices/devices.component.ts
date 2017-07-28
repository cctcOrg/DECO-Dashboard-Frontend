import { Component, OnInit } from '@angular/core';
import { Device } from '../device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  caseId: number;
  devices: Device[];

  contentLayers = ['cases', 'devices']; 
  constructor() { }

  ngOnInit() {
  }

  addDevice() {

  }
}
