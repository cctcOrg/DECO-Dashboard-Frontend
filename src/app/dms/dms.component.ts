import { Component, OnInit } from '@angular/core';
import { DigitalMedia } from '../digital-media';

@Component({
  selector: 'app-dms',
  templateUrl: './dms.component.html',
  styleUrls: ['./dms.component.css']
})
export class DMSComponent implements OnInit {
  dms: DigitalMedia[];
  deviceId: number;

  constructor() { }

  ngOnInit() {
  }

}
