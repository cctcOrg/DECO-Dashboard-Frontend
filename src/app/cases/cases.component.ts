import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from '../server.service';
import { CASES } from '../mock-cases';

export class Case {
  dateReceived: string;
	caseNumber: number;
	caseDescription: string;
  firstName: string;
  lastName: string;
  examinerName: string;
  collectionLocation: string;
  labId: number;
  userId: number; 
}

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  caseSelected = false; 
  newCase: Case = {
    dateReceived: "07-07-2010 04:20",
    caseNumber: 0,
    caseDescription: "",
    firstName: "",
    lastName: "" ,
    examinerName: "Jonathan Chianglin",
    collectionLocation: "San Luis Obispo",
    labId: 12,
    userId:  2
  }
  suspectName: string; 
  arr = [];

  @Input() mockCases: Case[]; 

  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

  addCase() {
    const json = {
      dateReceived: this.newCase.dateReceived,
      caseNumber: this.newCase.caseNumber,
      caseDescription: this.newCase.caseDescription,
      suspectName: this.newCase.firstName + " " + this.newCase.lastName,
      examinerName: this.newCase.examinerName,
      collectionLocation: this.newCase.collectionLocation,
      labId: this.newCase.labId,
      userId: this.newCase.userId
    }

    this.arr.push(json); 

    // convert object to array
    this.serverService.postCase(this.arr).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
