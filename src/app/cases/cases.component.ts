import { Observable } from 'rxjs/Observable';
import { CanComponentDeactivate } from '../can-deactivate-guard.service';
import { CasesService } from './cases.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params, CanDeactivate } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http'; 

import { MzToastService } from 'ng2-materialize';

import { ServerService } from '../server.service';
import { BreadcrumbService } from '../breadcrumb.service';
import { CollapsibleService } from '../collapsible.service';

import { Case } from '../case';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit, CanComponentDeactivate {
  cases: Case[] = [];

  caseSelected = false; 
  newCase = new Case(); 
  savedChanges = false;

  userId: number;
  sub: any;
  paramSubscription: Subscription;


  constructor(private serverService: ServerService,
              private toastService: MzToastService,
              private breadcrumbs: BreadcrumbService,
              private collapsible: CollapsibleService,
              private casesService: CasesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    setTimeout( () => {
      this.breadcrumbs.viewCases();
    });
    // I ran into a strange problem where I coudln't grab the userId from the router's
    // parameter list, hence the need to create a cases.service to store the userId.
    this.userId = this.casesService.getUserId();
    // Display any cases as cards.
    this.loadCases();
  }

  ngAfterViewInit() {
    Promise.resolve(null).then( () => this.collapsible.removeAllCollapsible() );
  }

  // Bound to Add Case button
  // Called when user click Add Case 
  postCase() {    
    this.savedChanges = true;
    this.serverService.postCase(this.userId, this.newCase).subscribe(
      (response) => this.loadCases(), 
      (error) => this.toastService.show('ERROR: Case not added', 4000)
    );
  }


  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean { 
    console.log('in can deactivate case');
    for(let temp in this.newCase) {
      let value = this.newCase[temp];
      if((value !== undefined) && !this.savedChanges) {
        return confirm('You are currently editing a case, do you wish to discard')
      }
    }  
    return true;
  }
   

  // Loads all cases from the back-end given the user ID
  // Will load the Case component multiple times
  loadCases() {
    // Remove old values from POST so that fields are blank in new POST
    this.newCase = new Case();

    this.cases = []; 
    this.serverService.getCases(this.userId).subscribe(
      (response: Response) => {
        let tempCase: Case;
        const data = response.json();
        console.log(data); 
        
        // Janky object-mapping
        for (let obj of data.case_summary_list) {
          tempCase = new Case(); 
          tempCase.id = obj.id; 
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
