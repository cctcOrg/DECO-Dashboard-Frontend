import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BreadcrumbService } from '../breadcrumb.service';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  @Input() caseNumber: number;
  @Input() caseDescription: string;
  @Input() suspectName: string;
  
  constructor(private breadcrumbs: BreadcrumbService) { }

  @Output() caseEvent = new EventEmitter();

  ngOnInit() {

  }

  viewDevices() {
    this.breadcrumbs.viewDevices();
  }

  viewCase() {
    this.caseEvent.emit(null);
  }

  viewMenu() {
    this.caseEvent.emit(null);
  }
}
