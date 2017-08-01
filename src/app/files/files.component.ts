import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';
import { File } from '../file';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  files: File[] = [];

  newFile = new File();

  constructor(private breadcrumbs: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbs.viewFiles();
  }

  postFile() {
    this.addFile(this.newFile);
    console.log(this.newFile);
  }

  addFile(newFile: File) {
    this.files.push(newFile);
    this.newFile = new File();
    console.log("File posted");
  }

}
