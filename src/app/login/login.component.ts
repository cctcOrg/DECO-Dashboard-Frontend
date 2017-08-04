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
  fileid1:number;
  fileid2:number;

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

  filejson1 = {
    "contentDesc": "content desc",
    "suggesetedReviewPlatform": "suggested review platform 1",
    "notes": "if you were a good note taker, you would fill out good notes"
  };
  filejson2 = {
    "contentDesc": "content desc2",
    "suggesetedReviewPlatform": "suggested review platform 12",
    "notes": "if you were a bad note taker, you would fill out bad notes"
  };
  postFile() {
    this.serverService.postFile(this.userid, this.caseid1, this.deviceid1, this.dmid1, this.imgid1, this.filejson1).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.serverService.postFile(this.userid, this.caseid2, this.deviceid2, this.dmid2, this.imgid2, this.filejson2).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  getUser() { 
    this.serverService.getUsers(this.email).subscribe(
      (response) => {
        let data = response.json(); 
        this.userid = data.id; 
        console.log(this.userid); 
    
      },
      (error) => console.log(error)
      );
  }
  getCase() { 
    this.serverService.getCases(this.userid).subscribe(
      (response) => {
        let data = response.json();
        console.log(data);
        this.caseid1 = data.case_summary_list[0].id;
        this.caseid2 = data.case_summary_list[1].id;
        console.log(this.caseid1); 
        console.log(this.caseid2); 
      },
      (error) => console.log(error)
      
    );
    
  }
  getDevice() { 
    let data;
    this.serverService.getDevices(this.userid, this.caseid1).subscribe(
      (response) => {
        data = response.json(); 
        console.log(data);
        this.deviceid1 = data.device_list[0].id; 
        console.log(this.deviceid1); 
      },
      (error) => console.log(error)
    );
    this.serverService.getDevices(this.userid, this.caseid2).subscribe(
      (response) => {
        data = response.json(); 
        this.deviceid2 = data.device_list[0].id; 
        console.log(this.deviceid2); 
      },
      (error) => console.log(error)
    );

  }
  getDigitalMedia() { 
    let data;
    this.serverService.getDigitalMedias(this.userid, this.caseid1, this.deviceid1).subscribe(
      (response) => {
        data = response.json(); 
        console.log(data); 
        this.dmid1 = data.digital_media_list[0].id;
        console.log(this.dmid1); 
      },
      (error) => console.log(error)
    );

    this.serverService.getDigitalMedias(this.userid, this.caseid2, this.deviceid2).subscribe(
      (response) => {
        data = response.json(); 
        console.log(data); 
        this.dmid2 = data.digital_media_list[0].id;
        console.log(this.dmid2); 
      },
      (error) => console.log(error)
    );

  }
  getImage() { 
    let data;
    this.serverService.getImages(this.userid, this.caseid1, this.deviceid1, this.dmid1).subscribe(
      (response) => {
        let data = response.json();
        console.log(data); 
        this.imgid1 = data.images_list[0].id;
      },
      (error) => console.log(error)
    );
    this.serverService.getImages(this.userid, this.caseid2, this.deviceid2, this.dmid2).subscribe(
      (response) => {
        let data = response.json();
        this.imgid2 = data.images_list[0].id;
      },
      (error) => console.log(error)
    );

  }
  
  getFile() {
    this.serverService.getFiles(this.userid, this.caseid1, this.deviceid1, this.dmid1, this.imgid1).subscribe(
      (response) => {
        let data = response.json();
        // this.fileid1 = data.files_list[0].id;
        console.log(data);
        console.log(this.fileid1);
      },
      (error) => console.log(error)
    );
    this.serverService.getFiles(this.userid, this.caseid2, this.deviceid2, this.dmid2, this.imgid2).subscribe(
      (response) => {
        let data = response.json();
        this.fileid2 = data.files_list[0].id;
        console.log(this.fileid2); 
      },
      (error) => console.log(error)
    );

  }

  NUKE() {
    this.serverService.NUKE().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
  );}
}
