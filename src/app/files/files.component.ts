import { Component, OnInit } from '@angular/core';
import { File } from '../file';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  dmId: number;
  files: File[];

  constructor() { }

  ngOnInit() {
  }

}
