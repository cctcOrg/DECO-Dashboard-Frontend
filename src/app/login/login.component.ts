import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin = true;
  constructor(private serverService: ServerService) { }

  @Output() loginEvent = new EventEmitter();

  ngOnInit() {
  }

  temp_login() {
    this.loginEvent.emit(null);
  }
  email = "email12@email.com";
  userid = 25;
  caseid= 4; 

  userjson = {
    "email": this.email,
    "firstName": "Jonathan",
    "lastName": "Chianglin"};
  postUser() { this.serverService.postUser(this.userjson).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  );}

  casejson = {
          "dateReceived": "2017-7-7 04:20",
          "caseNumber": 123452348,
          "caseDescription": "This is some description for some case",
          "suspectName": "Jonathan Chianglin",
          "examinerNames": "Jonathan Chianglin",
          "collectionLocation": "San Luis Obispo, CA",
          "labId": 1082,
          "userId": this.userid};
  postCase() { this.serverService.postCase(this.userid, this.casejson).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  );}

  devicejson = {
    "deviceDescription": "cheese",
        "make": "cheese",
        "model": "cheese",
        "serialNumber": 5879,
        "deviceStatus": "cheese",
        "shutDownMethod": "cheese",
        "systemDateTime": "cheese",
        "localDateTime": "cheese",
        "typeOfCollection": "cheese",
        "mediaStatus": "cheese",
        "caseId": 53489};
  postDevice() {this.serverService.postDevice(this.devicejson).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  ); }
  
  dmjson = {
    "dmId": 5289,
    "storageId" : 35289,
    "make": "Cheese",
    "Model": "Cheeeeeeeese",
    "serialNumber": 3490,
    "capacity": 5423,
    "deviceId": 489  };
  postDigitalMedia() { this.serverService.postDigitalMedia(this.dmjson).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  ); }
  
  arrjson = {
    "userId": 235,
        "mediaId": 124,
        "writeBlockMethod": "write block method",
        "imagingTools": "imaging tools",
        "format": "format",
        "primaryStorageMediaId": 124,
        "primaryStorageMediaName": "primary name",
        "backupStorageMediaId": 326,
        "backupStorageMediaName": "backup name",
        "postCollection": "postcollection",
        "size": 3589,
        "notes": "yeah",
        "dmId": 489 };
  postImage() { this.serverService.postImage(this.arrjson).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  );}

  getUser() { this.serverService.getUsers(this.email).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
    );}
  getCase() { this.serverService.getCases(this.userid, this.caseid).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
    );}
  getDevice() { this.serverService.getDevices().subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
    );}
  getDigitalMedia() { this.serverService.getDigitalMedias().subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
    );}
  getImage() { this.serverService.getImages().subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
    );}
}
