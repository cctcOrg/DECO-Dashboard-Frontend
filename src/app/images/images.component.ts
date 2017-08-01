import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';
import { Image } from '../image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: Image[] = [];

  newImage = new Image();

  constructor(private breadcrumbs: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbs.viewImages();
  }

  postImage() {
    this.addImage(this.newImage);
    console.log(this.newImage);
  }

  addImage(newImage: Image) {
    this.images.push(newImage);
    this.newImage = new Image();
    console.log("Image posted");
  }

}
