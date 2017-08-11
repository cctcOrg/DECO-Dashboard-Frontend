import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Response } from '@angular/http'; 
import { BreadcrumbService } from '../../breadcrumb.service';
import { CollapsibleService } from '../../collapsible.service'; 
import { ServerService } from '../../server.service';
import { Case } from '../../case'; 

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  // Need dynamic way of holding userId 
  userId: number;
  caseId: number;
  sub: any;
  paramSubscription: Subscription;

  @Input() currentCase: Case;
  
  constructor(private serverService: ServerService,
              private breadcrumbs: BreadcrumbService,
              private collapsibles: CollapsibleService,
              private route: ActivatedRoute, private router: Router) { }

  @Output() caseEvent = new EventEmitter();

  ngOnInit() {
  }

  routeToDevice() {
    this.router.navigate([this.currentCase.id, 'devices'], {relativeTo: this.route});
  }

  /*loadCurrentCase() { 
    this.serverService.getCase(this.userId, this.caseId).subscribe(
      (response: Response) => {
        const data =;
        const jsonData = JSON.parse(JSON.stringify(data));
        console.log(jsonData); 
        
        this.currentCase.id = jsonData.id; 
        this.currentCase.caseDescription = jsonData.caseDescription; 
        this.currentCase.caseNumber = jsonData.caseNumber;
        this.currentCase.collectionLocation = jsonData.collectionLocation; 
        this.currentCase.examinerFirstName = jsonData.examinerFirstName;
        this.currentCase.examinerLastName = jsonData.examinerLastName;
        this.currentCase.suspectFirstName = jsonData.suspectFirstName;
        this.currentCase.suspectLastName = jsonData.suspectLastName;
        this.currentCase.labId = jsonData.labId;
        this.currentCase.userId = jsonData.userId;
        this.currentCase.dateReceived = jsonData.dateReceived;
      },
      (error) => console.log(error)
    );
  }*/
}
