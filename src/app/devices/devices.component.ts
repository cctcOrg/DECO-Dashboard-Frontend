import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';
import { MzToastService } from 'ng2-materialize';
import { ServerService } from '../server.service'; 
import { Device } from '../device';
import { CollapsibleService } from '../collapsible.service'; 
import { Case } from '../case';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Response } from '@angular/http'; 

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  caseId: number;
  userId: number;
  devices: Device[] = [];

  case: Case = new Case(); 
  newDevice = new Device();

  constructor(private serverService: ServerService,
              private breadcrumbs: BreadcrumbService,
              private toastService: MzToastService,
              private collapsible: CollapsibleService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.breadcrumbs.viewDevices();

    this.loadDevices();
  }

  ngAfterViewInit() {
    this.route.queryParams.subscribe(
      params => setTimeout( () => { 
      this.caseId = params['caseId'];
      this.userId = params['userId'];
      this.getCase(); 
      this.collapsible.addCaseCollapsible(this.case); }, 0),
    error => this.case = null);

    console.log(this.case); 
  }

  getCase() {
    this.serverService.getCase(this.userId, this.caseId).subscribe(
      (response: Response) => {
        console.log(response); 
      },
      (error) => console.log(error)
    );
  }

  postDevice() {
    console.log(this.newDevice);
    this.serverService.postCase(this.case.userId, this.newDevice).subscribe(
      (response) => this.loadDevices(), 
      (error) => this.toastService.show('ERROR: Device not added', 4000)
    );
  }

  loadDevices() {
    this.devices = [];
    this.serverService.getDevices(this.case.userId, this.caseId).subscribe(
      (response: Response) => {
        let tempDevice: Device;
        const data = response.json();
        console.log(data); 
        
        // for (let obj of data.case_summary_list) {
        //   //
        // }

      },
      (error) => console.log(error)
    );
  }
}
