import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Response } from '@angular/http'; 

import { MzToastService } from 'ng2-materialize';

import { BreadcrumbService } from '../breadcrumb.service';
import { ServerService } from '../server.service'; 
import { CollapsibleService } from '../collapsible.service'; 

import { Case } from '../case';
import { Device } from '../device';
import { DigitalMedia } from '../digital-media';

@Component({
  selector: 'app-digital-medias',
  templateUrl: './digital-medias.component.html',
  styleUrls: ['./digital-medias.component.css']
})
export class DigitalMediasComponent implements OnInit {
  digitalMedias: DigitalMedia[] = [];
  caseId: number;
  userId: number;
  deviceId:number; 

  device: Device = new Device();
  newDigitalMedia = new DigitalMedia();

  constructor(private serverService: ServerService,
              private breadcrumbs: BreadcrumbService,
              private toastService: MzToastService,
              private collapsible: CollapsibleService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.breadcrumbs.viewDigitalMedias();
    this.collapsible.removeAfterDevicesCollapsible();
  }

  ngAfterViewInit() {
    this.route.queryParams.subscribe(
      params => setTimeout( () => { 
      this.caseId = params['caseId'];
      this.userId = params['userId'];
      this.deviceId = params['deviceId'];
      console.log(params); 
      console.log(this.caseId + " " + this.userId + " " + this.deviceId); 
      this.getDevice();
      this.loadDigitalMedias();
       }, 0),
    error => this.device = null);
  }
  
  getDevice() {
    this.serverService.getDevice(this.userId, this.caseId, this.deviceId).subscribe(
      (response: Response) => {
        let data = response.json();
        console.log(data.caseSummaryId); 
        this.device.caseId = data.caseSummaryId;
        this.device.deviceDescription = data.deviceDescription;
        this.device.deviceStatus = data.deviceStatus;
        this.device.id = data.id;
        this.device.localDateTime = data.localDateTime;
        this.device.make = data.make;
        this.device.mediaStatus = data.mediaStatus;
        this.device.model = data.model;
        this.device.serialNumber = data.serialNumber;
        this.device.shutDownMethod = data.shutDownMethod;
        this.device.systemDateTime = data.systemDateTime;
        this.device.typeOfCollection = data.typeOfCollection;
        
        this.collapsible.addDeviceCollapsible(this.device);
      },
      (error) => console.log(error)
    );
  }
  postDigitalMedia() {
    console.log(this.newDigitalMedia);
    this.serverService.postDigitalMedia(this.userId, this.caseId, this.deviceId, this.newDigitalMedia).subscribe(
      (response) => this.loadDigitalMedias(), 
      (error) => this.toastService.show('ERROR: Digital Media not posted', 4000)
    );
  }

  loadDigitalMedias() {
    this.digitalMedias = []
    this.serverService.getDigitalMedias(this.userId, this.caseId, this.deviceId).subscribe(
      (response: Response) => {
        this.digitalMedias = [];
        let tempDigitalMedia: DigitalMedia;
        const data = response.json();
        console.log(data); 
        
        for (let obj of data.digital_media_list) {
          tempDigitalMedia = new DigitalMedia();
          tempDigitalMedia.capacity = obj.capacity;
          tempDigitalMedia.deviceId = obj.deviceDescId;
          tempDigitalMedia.id = obj.id;
          tempDigitalMedia.make = obj.make;
          tempDigitalMedia.model = obj.model;
          tempDigitalMedia.serialNumber = obj.serialNumber;
          tempDigitalMedia.storageId = obj.storageId;
          tempDigitalMedia.userId = obj.userId
          
          this.digitalMedias.push(tempDigitalMedia);
        }

      },
      (error) => console.log(error)
    );
  }
}
