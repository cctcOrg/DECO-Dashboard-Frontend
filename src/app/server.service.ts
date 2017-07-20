import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) { }

  storeServer(servers: any[]) {
    console.log(JSON.stringify({"deviceDesc": "JACKSON",
      "imageName": "PLEASE",
      "primaryStorageMediaId": 123,
      "backupStorageMediaId": 123
    }));

    return this.http.post('http://129.65.247.21:5000/form',
      JSON.parse(JSON.stringify({"deviceDesc": "JACKSON",
        "imageName": "PLEASE",
        "primaryStorageMediaId": 123,
        "backupStorageMediaId": 123
      })));
  }

  getServers() {
    return this.http.get('https://129.65.247.21:5000/form')
  }
}
