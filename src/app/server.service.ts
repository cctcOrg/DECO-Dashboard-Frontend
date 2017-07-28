import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class ServerService {
  url = 'http://129.65.100.50:5000';

  constructor(private http: Http) { }

  getUsers(email: string) {
    return this.http.get(this.url + '/evd/user?email=' + email); 
  }

  postUser(json: any) {
    return this.http.post(this.url + '/evd/user', json);
  }

  getCases(userId: any, caseId: any) {
    // return this.http.get(this.url + '/evd/' + userId + '/case?id=' + caseId); 
    return this.http.get(this.url + '/evd/' + userId + '/case?id=' + caseId); 
  }

  postCase(userId: any, json: any) {
    return this.http.post(this.url + '/evd/' + userId+ '/case', json);
  }

  getDevices() {
    return this.http.get(this.url + '/evd/dev');
  }

  postDevice(json: any) {
    return this.http.post(this.url + '/evd/dev', json);
  }

  getDigitalMedias() {
    return this.http.get(this.url + '/evd/dm'); 
  }

  postDigitalMedia(json: any) {
    return this.http.post(this.url + '/evd/dm', json);
  }

  getImages() {
    return this.http.get(this.url + '/evd/img'); 
  }

  postImage(json: any) {
    return this.http.post(this.url + '/evd/img', json); 
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
