import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service'

import { Device } from '../../device';
import { Case } from '../../case';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  @Input() case:Case;
  @Input() device:Device;

  constructor(private breadcrumbs: BreadcrumbService, private route: Router,
              private router: ActivatedRoute) { }

  ngOnInit() {

  }

  updateDeviceId(deviceId: number) {
    this.breadcrumbs.setDeviceId(deviceId);
  }
  routeToDigitalMedia(deviceId: number) {
    this.route.navigate([deviceId, 'digital-medias'], {relativeTo: this.router});
  }

}
