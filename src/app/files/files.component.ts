import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';
import { File } from '../file';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  dmId: number;
  files: File[];

  constructor(private breadcrumbs: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbs.viewFiles();
  }

}
