import { Component, OnInit } from '@angular/core';
import { Case } from '../case';
import { CASES } from '../mock-cases';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isHomePage = true;
  contentLayers = ['Case', 'Device'];
  mockCases: Case[] = [{ dateReceived: "07-07-2010 04:20", caseNumber: 325, caseDescription: 'Uh Oh', suspectName: 'Jonathan Chianglin', examinerName: 'Jonathan Chianglin', collectionLocation: 'San Luis Obispo', labId: 142, userId: 12},
    { dateReceived: "07-07-2010 04:21", caseNumber: 326, caseDescription: 'Yikes', suspectName: ' Chianglin', examinerName: 'Jonathan Chianglin', collectionLocation: 'Luis Obispo', labId: 1542, userId: 13},
    { dateReceived: "07-07-2010 04:22", caseNumber: 327, caseDescription: 'Noo', suspectName: 'JonathanChianglin', examinerName: 'Jonathan Chianglin', collectionLocation: 'San Obispo', labId: 1142, userId: 14},
    { dateReceived: "07-07-2010 04:23", caseNumber: 328, caseDescription: 'asdf', suspectName: 'Jonathannglin', examinerName: 'Jonathan Chianglin', collectionLocation: 'San Luis', labId: 12, userId: 15},
    { dateReceived: "07-07-2010 04:24", caseNumber: 329, caseDescription: 'Description', suspectName: 'JonChianglin', examinerName: 'Jonathan Chianglin', collectionLocation: 'Default Location', labId: 14, userId: 16}];
  
  newCase: Case = {
    dateReceived: '',
    caseNumber: -1,
    caseDescription: '',
    suspectName: '',
    examinerName: '',
    collectionLocation: '',
    labId: -1,
    userId: -1
  };

  constructor() { }

  ngOnInit() {
  }

  viewCase() {

  }
  
  addCase() {

  }

}
