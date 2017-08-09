import { ImagesService } from './../images/images.service';
import { DigitalMediasService } from './../digital-medias/digital-medias.service';
import { DevicesService } from './../devices/devices.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CasesService } from './../cases/cases.service';
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
  casesClicked = false;
  paramsSub: Subscription;

  userId: number;
  caseId:number;
  deviceId:number;
  digitalMediaId:number;
  imageId:number;
  fileId:number;

  constructor(private breadcrumbs: BreadcrumbService, private casesService: CasesService,
              private route: Router, private router: ActivatedRoute,
              private devicesService: DevicesService, private digitalMediasService: DigitalMediasService,
              private imagesServices: ImagesService) { }
  
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

  breadCrumbCases() {
    this.userId = this.casesService.getUserId();
    this.route.navigate(['/dashboard', this.userId, 'cases']);
  }

  breadCrumbDevices() {
    this.userId = this.casesService.getUserId();
    this.caseId = this.devicesService.getCaseId();
    this.route.navigate(['/dashboard', this.userId, 'cases', this.caseId, 'devices']);
  }
  breadCrumbDm() {
    this.userId = this.casesService.getUserId();
    this.caseId = this.devicesService.getCaseId();
    this.deviceId = this.digitalMediasService.getDeviceId();
    this.route.navigate(['/dashboard', this.userId, 'cases', this.caseId, 'devices',
                        this.deviceId, 'digital-medias']);
  }
  breadCrumbImage() {
    this.userId = this.casesService.getUserId();
    this.caseId = this.devicesService.getCaseId();
    this.deviceId = this.digitalMediasService.getDeviceId();
    this.digitalMediaId = this.imagesServices.getDmId();
    setTimeout( () => {
      this.route.navigate(['/dashboard', this.userId, 'cases', this.caseId, 'devices',
                        this.deviceId, 'digital-medias', this.digitalMediaId,
                        'images']);
    }, 0);
  }
}