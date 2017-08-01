import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';
import { Image } from '../image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  fileId: number;
  images: Image[];

  constructor(private breadcrumbs: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbs.viewImages();
  }

}
