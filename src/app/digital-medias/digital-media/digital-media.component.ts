import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';

import { DigitalMedia } from '../../digital-media';

@Component({
  selector: 'app-digital-media',
  templateUrl: './digital-media.component.html',
  styleUrls: ['./digital-media.component.css']
})
export class DigitalMediaComponent implements OnInit {

  @Input() digitalMedia: DigitalMedia;
  @Input() caseId: number;
  @Input() userId: number;
  @Input() deviceId: number;
  
  constructor(private breadcrumbs: BreadcrumbService, private route: Router,
              private router: ActivatedRoute) { }

  ngOnInit() {
  }

  updateDigitalMediaId(digitalMediaId: number) {
    this.breadcrumbs.setDigitalMediaId(digitalMediaId);
  }
  routeToImages(digitalMediaId: number) {
    this.route.navigate([digitalMediaId, 'images'], {relativeTo: this.router});
  }
}
