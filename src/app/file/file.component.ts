import { Component, OnInit, Input } from '@angular/core';

import 'rxjs/Rx' ;

import { ServerService } from '../server.service'; 
import { FileMD } from '../filemd';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  @Input() fileMD: FileMD;
  @Input() caseId: number;
  @Input() userId: number;
  @Input() deviceId:number;
  @Input() digitalMediaId: number;
  @Input() imageId: number;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

  download() {
    this.serverService.getFile(this.userId, this.caseId, this.deviceId, this.digitalMediaId, this.imageId, this.fileMD.id).subscribe(
      (response) => this.openLink(response),
      (error)=>console.log(error),
      () => console.info("OK")
    );
  }
  // https://stackoverflow.com/questions/35138424/how-do-i-download-a-file-with-angular2

  openLink(response) {
    var blob = new Blob([response], { type: '*' });
    let url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
