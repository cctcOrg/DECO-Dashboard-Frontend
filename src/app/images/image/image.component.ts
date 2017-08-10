import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';

import { Image } from '../../image';

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
  
  constructor(private breadcrumbs: BreadcrumbService, private route: Router,
              private router: ActivatedRoute) { }

  ngOnInit() {
  }

  routeToFiles(imageId: number) {
    this.route.navigate([imageId, 'file'], {relativeTo: this.router});
  }

}
