import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from '../server.service';
import { MzToastService } from 'ng2-materialize';
import { CASES } from '../mock-cases';
import { Case } from '../case';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  cases: Case[] = [];

  caseSelected = false; 


  newCase: Case = {
    dateReceived: "",
    caseNumber: -1,
    caseDescription: "",
    suspectName: "",
    examinerName: "",
    collectionLocation: "",
    labId: -1,
    userId:  -1
  }

  firstName = '';
  lastName = ''; 
  exfirstName = '';
  exlastName = ''; 
  userId = 12; 

  @Input() mockCases: Case[]; 

  constructor(private serverService: ServerService,
              private toastService: MzToastService) { }

  ngOnInit() {
  }

  postCase() {
    this.newCase.suspectName = this.firstName + " " + this.lastName; 
    this.newCase.examinerName = this.exfirstName + " " + this.exlastName; 

    console.log(this.newCase); 
    this.addCase(this.newCase); 
    // this.serverService.postCase(this.userId, JSON.stringify(this.newCase)).subscribe(
    //   (response) => this.addCase(this.newCase), 
    //   (error) => this.toastService.show('ERROR: Case not added', 4000)
    // );
  }

  addCase(newCase: Case) {
    this.cases.push(newCase); 
    console.log("Case posted"); 
  }
}
