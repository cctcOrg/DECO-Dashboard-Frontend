import { CanComponentDeactivate } from './../can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { CasesService } from './../cases/cases.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'; 
import { Response, RequestOptions, Headers } from '@angular/http'; 

import { MzToastService } from 'ng2-materialize';

import { BreadcrumbService } from '../breadcrumb.service';
import { ServerService } from '../server.service'; 
import { CollapsibleService } from '../collapsible.service'; 

import { Device } from '../device';
import { Case } from '../case';
import { DigitalMedia } from '../digital-media'; 
import { Image } from '../image';
import { File } from '../file';
import { FileMD } from '../filemd';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit, CanComponentDeactivate {
  files: File[] = [];
  fileMDs: FileMD[] = [];
  caseId: number;
  userId: number;
  deviceId:number;
  digitalMediaId: number;
  imageId: number;
  paramSub: Subscription;
  savedChanges = false;

  image = new Image();
  newFile = new File();
  newFileMD = new FileMD(); 

  constructor(private serverService: ServerService,
              private breadcrumbs: BreadcrumbService,
              private toastService: MzToastService,
              private collapsible: CollapsibleService,
              private route: ActivatedRoute, private casesService: CasesService) { }

  ngOnInit() {
    this.breadcrumbs.viewFiles();
    // grab info from the ActivatedRoute
    this.paramSub = this.route.params.subscribe(
      (params: Params) => {
        this.caseId = params['caseId'];
        this.userId = this.casesService.getUserId();
        this.deviceId = params['deviceId'];
        this.digitalMediaId = params['dmId'];
        this.imageId = params['imageId'];
        // display the associated Image as a collapsible and any relavent
        // files as cards. 
        this.getImage();
        this.loadFiles();
      }
    );
  }

  ngAfterViewInit() {
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean { 
    for(let temp in this.newFile) {
      let value = this.newFile[temp];
      if((value !== undefined) && !this.savedChanges) {
        return confirm('You are currently editing a file, do you wish to discard')
      } 
    }  
    return true;
  }

  getImage() {
    this.serverService.getImage(this.userId, this.caseId, this.deviceId, this.digitalMediaId, this.imageId).subscribe(
      (response) => {
        let data = response.json(); 
        this.image.backupStorageMediaId = data.backupStorageMediaId;
        this.image.backupStorageMediaName = data.backupStorageMediaName;
        this.image.dmId = data.dmId;
        this.image.format = data.format;
        this.image.id = data.id;
        this.image.imagingTools = data.imagingTools;
        this.image.mediaId = data.mediaId;
        this.image.notes = data.notes;
        this.image.postCollection = data.postCollection;
        this.image.primaryStorageMediaId = data.primaryStorageMediaId;
        this.image.primaryStorageMediaName = data.primaryStorageMediaName;
        this.image.size = data.size;
        this.collapsible.addImageCollapsible(this.image); 
      }, 
      (error) => console.log(error)
    );
  }

  loadFiles() {
    this.newFile = new File;
    this.fileMDs = [];
    this.serverService.getFileMDs(this.userId, this.caseId, this.deviceId, this.digitalMediaId, this.imageId).subscribe(
      (response)=>{
        let tempFileMD: FileMD;
        const data = response.json(); 
        for (let obj of data.files_list) {
          tempFileMD = new FileMD(); 
          tempFileMD.contentDesc = obj.contentDesc
          tempFileMD.fileName = obj.fileName 
          tempFileMD.notes = obj.notes
          tempFileMD.size = obj.size
          tempFileMD.suggestedReviewPlatform = obj.suggestedReviewPlatform
          tempFileMD.id = obj.id
          this.fileMDs.push(tempFileMD); 
        }
      },
      (error)=>console.log(error)
    )
  }

  postFile(event) {
    this.savedChanges = true;
    let fileList: FileList = event.target.files;
    console.log(fileList)
    console.log(event)
    if(fileList.length > 0) {
        let formData:FormData = new FormData();
        formData.append('file', fileList[0]);
        formData.append('contentDesc', this.newFile.contentDesc);
        formData.append('suggestedReviewPlatform', this.newFile.suggestedReviewPlatform); 
        formData.append('notes', this.newFile.notes); 
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        // headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        console.log(fileList[0])
        console.log(formData)
        console.log(options)
        this.serverService.postFile(this.userId, this.caseId, this.deviceId, this.digitalMediaId, this.imageId, formData, options).subscribe(
          (response) => this.loadFiles(),
          (error)=> this.toastService.show('ERROR: File not added', 4000)
        )
    }
    
  }

}
