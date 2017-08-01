import { Component, OnInit, Input } from '@angular/core';
import { File } from '../file';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  @Input() file: File;

  constructor() { }

  ngOnInit() {
  }

}
