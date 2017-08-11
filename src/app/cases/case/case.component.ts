import { MzToastService } from 'ng2-materialize';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Response } from '@angular/http'; 
import { BreadcrumbService } from '../../breadcrumb.service';
import { CollapsibleService } from '../../collapsible.service'; 
import { ServerService } from '../../server.service';
import { Case } from '../../case'; 

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  // The current case taken from the cases component
  @Input() currentCase: Case;
  
  // Need dynamic way of holding userId 
  sub: any;
  paramSubscription: Subscription;
  
  constructor(private serverService: ServerService,
              private toastService: MzToastService,
              private breadcrumbs: BreadcrumbService,
              private collapsibles: CollapsibleService,
              private route: ActivatedRoute, private router: Router) { }

  // Tell the parent cases component to run its loadCases()
  @Output() caseEvent = new EventEmitter();

  ngOnInit() {
  }

  routeToDevice() {
    this.router.navigate([this.currentCase.id, 'devices'], {relativeTo: this.route});
  }

  // Modify case, tell parent component to reload all case cards
  putCase() {
    this.serverService.putCase(this.currentCase.userId, this.currentCase.id, this.currentCase).subscribe(
      (response) => this.caseEvent.emit(), 
      (error) => this.toastService.show('ERROR: Case not added', 4000)
    );
  }
}
