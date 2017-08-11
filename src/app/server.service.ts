import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class ServerService {
  // Local Fedora server with 5000 port URL
  url = 'http://129.65.100.50:5000';

  // EC2 Server URL
  // url = 'http://ec2-34-212-218-147.us-west-2.compute.amazonaws.com:80';
  constructor(private http: Http) { }

  /* 
    - Using the HTTP module, makes a GET or POST request with the id's as the parameter.
    - http.get and http.post returns an Observable so the components using this ServerService
      will have to subscribe to what the service returns.
    - A successful POST request returns a 200 response
    - A successful GET request returns a 200 response but importantly the JSON that you requested
    - The object-mapping is done in the component at the moment.
    Refer to the RESTful API's Specifications for more information.
  */
  getUsers(email: string) {
    return this.http.get(this.url + '/evd/user?email=' + email); 
  }

  postUser(json: any) {
    return this.http.post(this.url + '/evd/user', json);
  }

  // Case methods
  getCase(userId: any, caseId) {
    return this.http.get(this.url + '/evd/' + userId + '/case?caseId=' + caseId); 
  }
  
  getCases(userId: any) {
    return this.http.get(this.url + '/evd/' + userId + '/case'); 
  }

  postCase(userId: any, json: any) {
    return this.http.post(this.url + '/evd/' + userId+ '/case', json);
  }

  // Device methods
  getDevice(userId: any, caseId:any, deviceId: any) {
    return this.http.get(this.url + '/evd/' + userId + '/case/' + caseId + '/dev?deviceId=' + deviceId); 
  }

  getDevices(userId: any, caseId:any) {
    return this.http.get(this.url + '/evd/' + userId + '/case/' + caseId + '/dev');
  }

  postDevice(userId: any, caseId: any, json: any) {
    return this.http.post(this.url + '/evd/' + userId + '/case/' + caseId + '/dev', json);
  }

  // Digital media methods
  getDigitalMedia(userId: any, caseId: any, deviceId: any, dmId: any) {
    return this.http.get(this.url + '/evd/' + userId + '/case/' + caseId + '/dev/' + deviceId + '/dm?dmId=' + dmId); 
  }

  getDigitalMedias(userId: any, caseId: any, deviceId: any) {
    return this.http.get(this.url + '/evd/' + userId + '/case/' + caseId + '/dev/' + deviceId + '/dm'); 
  }

  postDigitalMedia(userId: any, caseId: any, deviceId: any, json: any) {
    return this.http.post(this.url + '/evd/' + userId + '/case/' + caseId + '/dev/' + deviceId + '/dm', json);
  }

  // Image methods
  getImage(userId: any, caseId: any, deviceId: any, dmId: any, imgId: any) {
    return this.http.get(this.url + '/evd/' + userId + '/case/' + caseId + '/dev/' + deviceId + '/dm/' + dmId + '/img?imgId=' + imgId );
  }

  getImages(userId: any, caseId: any, deviceId: any, dmId: any) {
    return this.http.get(this.url + '/evd/' + userId + '/case/' + caseId + '/dev/' + deviceId + '/dm/' + dmId + '/img');
  }

  postImage(userId: any, caseId: any, deviceId: any, dmId: any, json: any) {
    return this.http.post(this.url + '/evd/' + userId + '/case/' + caseId + '/dev/' + deviceId + '/dm/' + dmId + '/img', json);
  }

  // TODO: Get File to work
  getFile(userId: any, caseId: any, deviceId: any, dmId: any, imgId: any, fileId: any) {
    return this.http.get(this.url + '/evd/' + userId + '/case/' + caseId + '/dev/' + deviceId + '/dm/' + dmId + '/img/' + imgId + '/file?fileId=' + fileId); 
  }

  getFiles(userId: any, caseId: any, deviceId: any, dmId: any, imgId: any) {
    return this.http.get(this.url + '/evd/' + userId + '/case/' + caseId + '/dev/' + deviceId + '/dm/' + dmId + '/img/' + imgId + '/file');
  }

  postFile(userId: any, caseId: any, deviceId: any, dmId: any, imgId: any, formData: any, options: any) {
    return this.http.post(this.url + '/evd/' + userId + '/case/' + caseId + '/dev/' + deviceId + '/dm/' + dmId + '/img/' + imgId + '/file', formData, options);
  }

  getFileMDs(userId: any, caseId: any, deviceId: any, dmId: any, imgId: any) {
    return this.http.get(this.url + '/evd/' + userId + '/case/' + caseId + '/dev/' + deviceId + '/dm/' + dmId + '/img/' + imgId + '/filemd');
  }

  // TODO: DELETE THIS WHEN IN DELPOYING FOR PRODUCTION! Clear database for development purposes
  NUKE() {
    return this.http.delete(this.url+'/evd/nuke'); 
  }
}
