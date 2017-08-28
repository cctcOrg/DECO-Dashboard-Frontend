import { MzToastService } from 'ng2-materialize';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Response } from '@angular/http'; 
import { BreadcrumbService } from '../../breadcrumb.service';
import { CollapsibleService } from '../../collapsible.service'; 
import { ServerService } from '../../server.service';
import { Case } from '../../case'; 
import { User } from "../../user";

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  // The current case taken from the cases component
  @Input() currentCase: Case;
  
  constructor(private serverService: ServerService,
              private toastService: MzToastService,
              private breadcrumbs: BreadcrumbService,
              private collapsibles: CollapsibleService,
              private route: ActivatedRoute, 
              private router: Router) { }

  // Tell the parent cases component to run its loadCases()
  @Output() reloadCaseView = new EventEmitter();

  ngOnInit() {
  }

  // Go to case's devices
  routeToDevice() {
    this.router.navigate([this.currentCase.id, 'devices'], {relativeTo: this.route});
  }

  // Modify case, tell parent component to reload all case cards
  putCase() {
    this.serverService.putCase(this.currentCase.userId, this.currentCase.id, this.currentCase).subscribe(
      // Reload cases
      (response) => this.reloadCaseView.emit(), 
      (error) => this.toastService.show('ERROR: Case not modified!', 4000)
    );
  }

  // Remove the case. If there's any items under the case (device, digital media, etc), backend will through
  deleteCase() {
    var owner: User;

    console.log("Deleting case...")
    console.log("Calling deleteCase()...");
    
    this.serverService.deleteCase(this.currentCase.userId, this.currentCase.id).subscribe(
        // Reload cases
        (response) => this.reloadCaseView.emit(), 
        (error) => this.toastService.show('ERROR: Case not deleted!', 4000)
    );
  }
}
