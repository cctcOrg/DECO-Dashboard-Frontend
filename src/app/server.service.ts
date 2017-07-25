import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class ServerService {
  url = 'https://129.65.100.50:6000';

  constructor(private http: Http) { }

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
}
