import { DevicesService } from './devices.service';
import { CasesService } from './../cases/cases.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'; 
import { Response } from '@angular/http'; 

import { MzToastService } from 'ng2-materialize';

import { BreadcrumbService } from '../breadcrumb.service';
import { ServerService } from '../server.service'; 
import { CollapsibleService } from '../collapsible.service'; 

import { Device } from '../device';
import { Case } from '../case';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  caseId: number;
  userId: number;
  devices: Device[] = [];
  paramSub: Subscription;

  case: Case = new Case(); 
  newDevice = new Device();

  constructor(private serverService: ServerService,
              private breadcrumbs: BreadcrumbService,
              private toastService: MzToastService,
              private collapsible: CollapsibleService,
              private route: ActivatedRoute, private casesService: CasesService,
              private deviceService: DevicesService) { }

  ngOnInit() {
    setTimeout( () => {
      this.breadcrumbs.viewDevices();
    });
    this.paramSub = this.route.params.
      subscribe(
        (params: Params) => {
          this.caseId = +params['caseId'];
          this.deviceService.setCaseId(this.caseId);
          this.userId = this.casesService.getUserId();
          console.log(this.userId + " " + this.caseId);
          this.getCase();
          this.loadDevices();
        }
      );

  }

  ngAfterViewInit() {
    Promise.resolve(null).then( () => this.collapsible.removeAfterCasesCollapsible() );

/*    this.route.queryParams.subscribe(
      params => setTimeout( () => { 
      this.caseId = +params['caseId'];
      this.userId = +params['userId'];
      console.log(this.caseId + " " + this.userId); 
      this.getCase();
      this.loadDevices(); }, 0),
    error => this.case = null);*/

   
  }
// TODO : work with the collapsible
  getCase() {
    this.serverService.getCase(this.userId, this.caseId).subscribe(
      (response: Response) => {
        let data = response.json();
        // console.log(data); 
        this.case.id = this.caseId;
        this.case.userId = this.userId;
        this.case.caseDescription = data.caseDescription;
        this.case.caseNumber = data.caseNumber;
        this.case.collectionLocation = data.collectionLocation;
        this.case.dateReceived = data.dateReceived;
        this.case.examinerFirstName = data.examinerFirstName;
        this.case.examinerLastName = data.examinerLastName;
        this.case.labId = data.labId;
        this.case.suspectFirstName = data.suspectFirstName;
        this.case.suspectLastName = data.suspectLastName;
        this.collapsible.addCaseCollapsible(this.case);
        console.log(this.case.id + " " + this.userId)
      },
      (error) => console.log(error)
    );
  }

  postDevice() {
    console.log(this.newDevice);
    this.serverService.postDevice(this.userId, this.caseId, this.newDevice).subscribe(
      (response) => this.loadDevices(), 
      (error) => this.toastService.show('ERROR: Device not added', 4000)
    );
  }

  loadDevices() {
    this.devices = [];
    this.serverService.getDevices(this.userId, this.caseId).subscribe(
      (response: Response) => {
        let tempDevice: Device;
        const data = response.json();
        console.log(data); 
        
        for (let obj of data.device_list) {
          tempDevice = new Device();

          tempDevice.id = obj.id;
          tempDevice.caseId = obj.caseId;
          tempDevice.deviceDescription = obj.deviceDescription;
          tempDevice.deviceStatus = obj.deviceStatus;
          tempDevice.localDateTime = obj.localDateTime;
          tempDevice.make = obj.make;
          tempDevice.mediaStatus = obj.mediaStatus;
          tempDevice.model = obj.model;
          tempDevice.serialNumber = obj.serialNumber;
          tempDevice.shutDownMethod = obj.shutDownMethod;
          tempDevice.systemDateTime = obj.systemDateTime;
          tempDevice.typeOfCollection = obj.typeOfCollection;
          this.devices.push(tempDevice);
        }

      },
      (error) => console.log(error)
    );
  }
}
