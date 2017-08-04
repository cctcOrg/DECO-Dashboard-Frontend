import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Response } from '@angular/http'; 

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
export class FilesComponent implements OnInit {
  files: File[] = [];
  caseId: number;
  userId: number;
  deviceId:number;
  digitalMediaId: number;
  imageId: number;

  image = new Image();
  newFile = new File();
  newFileMD = new FileMD(); 

  constructor(private serverService: ServerService,
              private breadcrumbs: BreadcrumbService,
              private toastService: MzToastService,
              private collapsible: CollapsibleService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.breadcrumbs.viewFiles();
  }

  ngAfterViewInit() {
    this.route.queryParams.subscribe(
      params => setTimeout( () => { 
      this.caseId = params['caseId'];
      this.userId = params['userId'];
      this.deviceId = params['deviceId'];
      this.digitalMediaId = params['digitalMediaId'];
      this.imageId = params['imageId'];
      this.getImage();
      this.loadFiles();
       }, 500),
    error => this.image = null);
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
    this.files = [];
    this.serverService.getFiles(this.userId, this.caseId, this.deviceId, this.digitalMediaId, this.imageId).subscribe(
      (response)=>{
        let tempFileMD: FileMD;
        const data = response.json(); 
        
      },
      (error)=>console.log(error)
    )
  }

  postFile() {
    this.serverService.postFile(this.userId, this.caseId, this.deviceId, this.digitalMediaId, this.imageId, this.newFile).subscribe(
      (response) => this.loadFiles(),
      (error)=> this.toastService.show('ERROR: Images not added', 4000)
    )
    this.newFile = new File(); 
  }

}
