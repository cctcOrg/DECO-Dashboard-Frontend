import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  contentLayers = ['cases', 'devices']; 
  constructor() { }

  ngOnInit() {
  }

  addDevice() {

  }
}
