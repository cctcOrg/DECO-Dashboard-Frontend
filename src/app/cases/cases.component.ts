import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from '../server.service';
import { BreadcrumbService } from '../breadcrumb.service';
import { MzToastService } from 'ng2-materialize';
import { Case } from '../case';
import { CollapsibleService } from '../collapsible.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  cases: Case[] = [];

  caseSelected = false; 
  newCase = new Case(); 

  firstName = '';
  lastName = ''; 
  exfirstName = '';
  exlastName = ''; 
  // Need dynamic way of holding userId 
  userId = 2;


  constructor(private serverService: ServerService,
              private toastService: MzToastService,
              private breadcrumbs: BreadcrumbService,
              private collapsible: CollapsibleService) { }

  ngOnInit() {
    setTimeout( () => {
      this.breadcrumbs.viewCases();
    });
  }

  ngAfterViewInit() {
    Promise.resolve(null).then( () => this.collapsible.removeAllCollapsible() );

  }

  postCase() {
    this.newCase.suspectName = this.firstName + " " + this.lastName; 
    this.newCase.examinerName = this.exfirstName + " " + this.exlastName; 
    
    console.log(this.newCase); 
    this.addCase(this.newCase); 
    // this.serverService.postCase(this.userId, this.newCase).subscribe(
    //   (response) => this.addCase(this.newCase), 
    //   (error) => this.toastService.show('ERROR: Case not added', 4000)
    // );
  }

  addCase(newCase: Case) {
    this.cases.push(newCase); 
    this.newCase = new Case(); 
    console.log("Case posted"); 
  }
}
