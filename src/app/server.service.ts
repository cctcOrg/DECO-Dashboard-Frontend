import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class ServerService {
  url = 'https://129.65.100.50:6000';

  constructor(private http: Http) { }

  getUsers(email: string) {
    return this.http.get(this.url + '/evd/user/email=' + email); 
  }

  postUser(newUser: any[]) {
    return this.http.post(this.url + '/evd/user', 
    JSON.parse(JSON.stringify({
      "email": "email@email.com",
      "firstName": "J",
      "lastName": "C"
    })));
  }

  getCases(caseId: number) {
    return this.http.get(this.url + '/evd/case/id=' + caseId); 
  }

  postCase(newCase: any[]) {
    console.log(newCase);
    return this.http.post(this.url + '/evd/case',
      JSON.parse(JSON.stringify({
          "dateReceived": "2017-7-7 04:20",
          "caseNumber": 100,
          "caseDescription": "This is some description for some case",
          "suspectName": "Jonathan Chianglin",
          "examinerNames": "Jonathan Chianglin",
          "collectionLocation": "San Luis Obispo, CA",
          "labId": 1000,
          "userId": 89
      })));
    // return this.http.post(this.url + '/evd/case',
    //   JSON.stringify(newCase)); 
  }

  getDevices() {
    return this.http.get(this.url + '/evd/dev');
  }

  postDevice(newDevice: any[]) {
    return this.http.post(this.url + '/evd/dev',
      JSON.parse(JSON.stringify({
  		  "deviceDescription": "cheese",
        "make": "cheese",
        "model": "cheese",
        "serialNumber": 5879,
        "deviceStatus": "cheese",
        "shutDownMethod": "cheese",
        "systemDateTime": "cheese",
        "localDateTime": "cheese",
        "typeOfCollection": "cheese",
        "mediaStatus": "cheese"
      })));
  }

  getDigitalMedias() {
    return this.http.get(this.url + '/evd/dm'); 
  }

  postDigitalMedia() {
    return this.http.post(this.url + '/evd/dm', 
      JSON.parse(JSON.stringify({
        "storageId" : 35289,
        "make": "Cheese",
        "Model": "Cheeeeeeeese",
        "serialNumber": 3490,
        "capacity": 5423
      })))
  }

  getImages() {
    return this.http.get(this.url + '/evd/img'); 
  }

  postImage() {
    return this.http.post(this.url + '/evd/img',
      JSON.parse(JSON.stringify({
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
        "Notes": "yeah"
      }))); 
  }

  // TODO : Implement this (waiting on back-end)
  getFiles() {}

  // TODO : Implement this (waiting on back-end)
  postFile() {}

  storeServer(servers: any[]) {
    return this.http.post(this.url + '/form',
      JSON.parse(JSON.stringify({"deviceDesc": "JACKSON",
        "imageName": "PLEASE",
        "primaryStorageMediaId": 123,
        "backupStorageMediaId": 123
      })));
  }

  getServers() {
    return this.http.get(this.url + '/form')
  }
}
