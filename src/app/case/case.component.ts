import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  @Input() caseNumber: number;
  @Input() caseDescription: string;
  @Input() suspectName: string;
  
  constructor() { }

  @Output() caseEvent = new EventEmitter();

  ngOnInit() {
  }

  viewCase() {
    this.caseEvent.emit(null);
  }

  viewMenu() {
    this.caseEvent.emit(null);
  }

}
