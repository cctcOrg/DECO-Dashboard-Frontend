import { Component, OnInit, Input } from '@angular/core';
import { DigitalMedia } from '../digital-media';

@Component({
  selector: 'app-digital-media',
  templateUrl: './digital-media.component.html',
  styleUrls: ['./digital-media.component.css']
})
export class DigitalMediaComponent implements OnInit {

  @Input() digitalMedia: DigitalMedia;

  constructor() { }

  ngOnInit() {
  }

}
