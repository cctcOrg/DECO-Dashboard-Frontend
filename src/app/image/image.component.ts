import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image: Image;
  @Input() caseId: number;
  @Input() userId: number;
  @Input() deviceId: number;
  @Input() digitalMediaId: number;
  
  constructor() { }

  ngOnInit() {
  }

}
