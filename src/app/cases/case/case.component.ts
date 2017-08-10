import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BreadcrumbService } from '../../breadcrumb.service';
import { CollapsibleService } from '../../collapsible.service'; 
import { Case } from '../../case'; 

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  @Input() case: Case;
  
  constructor(private breadcrumbs: BreadcrumbService,
              private collapsibles: CollapsibleService,
              private route: ActivatedRoute, private router: Router) { }

  @Output() caseEvent = new EventEmitter();

  ngOnInit() {
  }

  routeToDevice(caseId: number) {
    this.router.navigate([caseId, 'devices'], {relativeTo: this.route});
  }
}
