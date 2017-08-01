import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';

@Component({
  selector: 'app-digital-medias',
  templateUrl: './digital-medias.component.html',
  styleUrls: ['./digital-medias.component.css']
})
export class DigitalMediasComponent implements OnInit {

  constructor(private breadcrumbs: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbs.viewDigitalMedias();
  }

}
