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
import { FormField } from '../formField';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit, CanComponentDeactivate {
  newCase = new Case(); 
  cases: Case[] = [];
 
  form: FormField[] = [];
  caseVariables: string[] = ["suspectFirstName", "suspectLastName",
    "caseNumber", "dateReceived", "caseDescription", 
    "examinerFirstName", "examinerLastName",
    "collectionLocation", "labId"];
  labels: String[] = ["Suspect First Name", "Suspect Last Name", "Case Number",
    null, "Case Description", "Examiner First Name", "Examiner Last Name", 
    "Collection Location", "Lab ID"];
  ids: String[] = ["input-firstname", "input-lastname", "input-caseNumber", "datereceived",
    "input-desc", "input-ex-firstname", "input-ex-lastname", "input-loc"];
  types: String[] = ["text", "text", "number", "datetime-local", "text", "text",
  "text", "text", "text", "number"];
  fieldValue: any[] = ["", "", "", "", "", "", "", "", "", ""];


  caseSelected = false; 
  savedChanges = false;
  caseComplete = false;
  numFields: number = 9;
  curFields: number = 0;
  userId: number;
  sub: any;
  paramSubscription: Subscription;
  test: string;

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

    this.setForm();
  }

  ngAfterViewInit() {
    Promise.resolve(null).then( () => this.collapsible.removeAllCollapsible() );
  }

  // Bound to Add Case button
  // Called when user click Add Case 
  postCase() {    
    this.setNewCase();
    
    console.log(this.newCase);
    for(let temp in this.newCase) {
      if(temp !== "id" && temp !== "userId") {
        let value = this.newCase[temp];
        if(value === undefined) {
          return confirm('Case unfinished!')
        }
      }
    }  
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
        return confirm('You are currently editing a case, do you wish to discard?')
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

  setForm() {
    // Create new form modal
    for(var index = 0; index < this.caseVariables.length; index++) {
      var field: FormField = new FormField();

      // HTML does use field.variable
      field.variable = this.caseVariables[index];
      field.label = this.labels[index];
      field.id = this.ids[index];
      field.type = this.types[index];

      // Push field to form
      this.form.push(field);
    }
  }

  // Initializes newCase with values from fieldValue
  setNewCase() {
    var index = 0;

    for (index = 0; index < this.caseVariables.length; index++) {
      this.newCase[this.caseVariables[index]] = this.fieldValue[index];
    }
  }
}
