import { state } from '@angular/animations';
import { ServerService } from './../server.service';
import { LoginService } from './../login/login.service';
import { ImagesService } from './../images/images.service';
import { DigitalMediasService } from './../digital-medias/digital-medias.service';
import { DevicesService } from './../devices/devices.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CasesService } from './../cases/cases.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';
import { Response } from '@angular/http'; 

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  caseView: boolean;
  deviceView: boolean;
  digitalMediaView: boolean;
  imageView: boolean;
  fileView: boolean;
  casesClicked: boolean = false;
  paramsSub: Subscription;

  // Name and email displayed in the side nav
  name: String;
  email: String;

  userId: number;
  caseId: number;
  deviceId: number;
  digitalMediaId: number;
  imageId: number;
  fileId: number;

  constructor(private route: Router,
              private breadcrumbs: BreadcrumbService, 
              private casesService: CasesService,
              private router: ActivatedRoute,
              private devicesService: DevicesService, 
              private digitalMediasService: DigitalMediasService,
              private imagesServices: ImagesService, 
              private loginService: LoginService,
              private serverService: ServerService) { }
  
  ngOnInit() {
    this.breadcrumbs.currentCase.subscribe(caseView => this.caseView = caseView);
    this.breadcrumbs.currentDevice.subscribe(deviceView => this.deviceView = deviceView);
    this.breadcrumbs.currentDigitalMedia.subscribe(digitalMediaView => this.digitalMediaView = digitalMediaView);
    this.breadcrumbs.currentImage.subscribe(imageView => this.imageView = imageView);
    this.breadcrumbs.currentFile.subscribe(fileView => this.fileView = fileView);
  }

  ngAfterViewInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userId = this.casesService.getUserId();

    this.serverService.getUserById(this.userId).subscribe(
      (response: Response) => {
        const data = response.json();
        console.log(data);

        this.name = data.firstName + " " + data.lastName;
        this.email = data.email;
      },
      (error) => console.log(error)
    );
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

  onLogout() {
    this.loginService.isLogin = false;
    this.route.navigate(['/']);
  }
}