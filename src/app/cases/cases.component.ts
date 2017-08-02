import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http'; 
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

  // Need dynamic way of holding userId 
  userId = 1;


  constructor(private serverService: ServerService,
              private toastService: MzToastService,
              private breadcrumbs: BreadcrumbService,
              private collapsible: CollapsibleService) { }

  ngOnInit() {
    setTimeout( () => {
      this.breadcrumbs.viewCases();
    });

    this.loadCases();
  }

  ngAfterViewInit() {
    Promise.resolve(null).then( () => this.collapsible.removeAllCollapsible() );

  }

  postCase() {    
    console.log(this.newCase); 
    
    this.serverService.postCase(this.userId, this.newCase).subscribe(
      (response) => this.loadCases(), 
      (error) => this.toastService.show('ERROR: Case not added', 4000)
    );
  }

  loadCases() {
    this.cases = []; 
    this.serverService.getCases(this.userId).subscribe(
      (response: Response) => {
        let tempCase: Case;
        const data = response.json();
        console.log(data); 
        
        for (let obj of data.case_summary_list) {
          tempCase = new Case(); 
          tempCase.caseId = obj.caseId; 
          tempCase.caseDescription = obj.caseDescription; 
          tempCase.caseNumber = obj.caseNumber;
          tempCase.collectionLocation = obj.collectionLocation; 
          tempCase.examinerFirstName = obj.examinerFirstName;
          tempCase.examinerLastName = obj.examinerLastName;
          tempCase.suspectFirstName = obj.suspectFirstName;
          tempCase.suspectLastName = obj.suspectLastName;
          tempCase.labId = obj.labId;
          tempCase.userId = obj.userId;
          tempCase.dateReceived = obj.dateReceived; 
          console.log(tempCase); 
          this.cases.push(tempCase); 
        }

      },
      (error) => console.log(error)
    );
  }
}
