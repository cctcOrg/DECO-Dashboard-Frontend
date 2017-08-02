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
  email = "chianglin@email.com";
  userid: number;
  caseid1: number;
  caseid2: number; 
  deviceid1: number;
  deviceid2: number; 
  dmid1:number;
  dmid2:number;
  imgid1:number;
  imgid2:number;

  userjson = {
    "email": this.email,
    "firstName": "Jonathan",
    "lastName": "Chianglin"};
  postUser() { 
    this.serverService.postUser(this.userjson).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );}

  casejson = {
          "dateReceived": "2017-7-7 04:20",
          "caseNumber": 1,
          "caseDescription": "This is some description for some case",
          "suspectLastName": "Chianglin",
          "suspectFirstName": "Jonathan",
          "examinerLastName": "Chianglin",
          "examinerFirstName": "Jonathan",
          "collectionLocation": "San Luis Obispo, CA",
          "labId": 1,
          "userId": this.userid};
  casejson2 = {
          "dateReceived": "2017-7-7 04:20",
          "caseNumber": 2,
          "caseDescription": "This is some description for some case",
          "suspectLastName": "Chianglin",
          "suspectFirstName": "Jonathan",
          "examinerLastName": "Chianglin",
          "examinerFirstName": "Jonathan",
          "collectionLocation": "San Luis Obispo, CA",
          "labId": 3,
          "userId": this.userid};
  postCase() { 
    this.serverService.postCase(this.userid, this.casejson).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.serverService.postCase(this.userid, this.casejson2).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  devicejson1 = {
    "deviceDescription": "cheese",
        "make": "cheese",
        "model": "cheese",
        "serialNumber": 1,
        "deviceStatus": "cheese",
        "shutDownMethod": "Hard",
        "systemDateTime": "07-07-2010 02:02",
        "localDateTime": "07-07-2010 02:02",
        "typeOfCollection": "Targeted",
        "mediaStatus": "Encrypted",
        "caseId": this.caseid1};
  devicejson2 = {
    "deviceDescription": "cheese",
        "make": "cheese",
        "model": "cheese",
        "serialNumber": 2,
        "deviceStatus": "cheese",
        "shutDownMethod": "Soft",
        "systemDateTime": "07-07-2010 02:02",
        "localDateTime": "07-07-2010 02:02",
        "typeOfCollection": "Computer",
        "mediaStatus": "Removed from system",
        "caseId": this.caseid2};
  postDevice() {
    this.serverService.postDevice(this.userid, this.caseid1, this.devicejson1).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.serverService.postDevice(this.userid, this.caseid2, this.devicejson2).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );  
  }
  
  dmjson1 = {
    "storageId" : 1,
    "make": "Cheese",
    "model": "Cheeeeeeeese",
    "serialNumber": 1,
    "capacity": 1,
    "deviceId": this.deviceid1  };
  dmjson2 = {
    "storageId" : 2,
    "make": "Cheese",
    "model": "Chese",
    "serialNumber": 2,
    "capacity": 2,
    "deviceId": this.deviceid2  };
  postDigitalMedia() { 
    this.serverService.postDigitalMedia(this.userid, this.caseid1, this.deviceid1, this.dmjson1).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    ); 
    this.serverService.postDigitalMedia(this.userid, this.caseid2, this.deviceid2, this.dmjson2).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    ); 
  }
  
  imgjson1 = {
    "userId": this.userid,
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
  imgjson2 = {
    "userId": this.userid,
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
  postImage() { 
    this.serverService.postImage(this.userid, this.caseid1, this.deviceid1, this.dmid1, this.imgjson1).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.serverService.postImage(this.userid, this.caseid2, this.deviceid2, this.dmid2, this.imgjson2).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  getUser() { this.serverService.getUsers(this.email).subscribe(
    (response) => {
      let data = response.json(); 
      this.userid = data.id; 
      console.log(this.userid); 
  
    },
    (error) => console.log(error)
    );}
  getCase() { 
    console.log(this.userid); 
    this.serverService.getCases(this.userid).subscribe(
      (response) => {
        let data = response.json();
        this.caseid1 = data.case_summary_list[0].id;
        this.caseid2 = data.case_summary_list[1].id;
      },
      (error) => console.log(error)
      
    );
    console.log(this.caseid2); 
    console.log(this.caseid1); 
  }
  getDevice() { 
    let data;
    this.serverService.getDevices(this.userid, this.caseid1).subscribe(
      (response) => {
        data = response.json(); 
        console.log(data.device_list[0].id); 
        this.deviceid1 = data.device_list[0].id; 
      },
      (error) => console.log(error)
    );
    this.serverService.getDevices(this.userid, this.caseid2).subscribe(
      (response) => {
        data = response.json(); 
        this.deviceid2 = data.device_list[0].id; 
      },
      (error) => console.log(error)
    );
    console.log(this.deviceid1); 
    console.log(this.deviceid2); 

  }
  getDigitalMedia() { 
    let data;
    this.serverService.getDigitalMedias(this.userid, this.caseid1, this.deviceid1).subscribe(
      (response) => {
        data = response.json(); 
        console.log(data); 
        this.dmid1 = data.digital_media_list[0].id;
      },
      (error) => console.log(error)
    );

    this.serverService.getDigitalMedias(this.userid, this.caseid2, this.deviceid2).subscribe(
      (response) => {
        data = response.json(); 
        console.log(data); 
        this.dmid2 = data.digital_media_list[0].id;
      },
      (error) => console.log(error)
    );

    console.log(this.dmid1); 
    console.log(this.dmid2); 
  }
  getImage() { 
    let data;
    this.serverService.getImages(this.userid, this.caseid1, this.deviceid1, this.dmid1).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.serverService.getImages(this.userid, this.caseid2, this.deviceid2, this.dmid2).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  
  NUKE() {
    this.serverService.NUKE().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
  );}
}
