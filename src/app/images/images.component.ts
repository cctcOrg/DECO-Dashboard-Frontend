import { Component, OnInit } from '@angular/core';
import { Image } from '../image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  fileId: number;
  images: Image[];

  constructor() { }

  ngOnInit() {
  }

}
