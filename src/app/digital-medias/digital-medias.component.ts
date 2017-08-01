import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';
import { DigitalMedia } from '../digital-media';

@Component({
  selector: 'app-digital-medias',
  templateUrl: './digital-medias.component.html',
  styleUrls: ['./digital-medias.component.css']
})
export class DigitalMediasComponent implements OnInit {
  digitalMedias: DigitalMedia[] = [];

  newDigitalMedia = new DigitalMedia();

  constructor(private breadcrumbs: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbs.viewDigitalMedias();
  }

  postDigitalMedia() {
    console.log(this.newDigitalMedia);
    this.addDigitalMedia(this.newDigitalMedia);
  }

  addDigitalMedia(digitalMedia: DigitalMedia) {
    this.digitalMedias.push(digitalMedia)
    this.newDigitalMedia = new DigitalMedia();
    console.log("Digital media posted");
  }
}
