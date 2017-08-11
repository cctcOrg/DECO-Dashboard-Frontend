import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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

  currentCase = new Case(); 

  // Need dynamic way of holding userId 
  userId: number;
  sub: any;
  paramSubscription: Subscription;

  @Input() case: Case;
  
  constructor(private serverService: ServerService,
              private breadcrumbs: BreadcrumbService,
              private collapsibles: CollapsibleService,
              private route: ActivatedRoute, private router: Router) { }

  @Output() caseEvent = new EventEmitter();

  ngOnInit() {
  }

  routeToDevice(caseId: number) {
    this.router.navigate([caseId, 'devices'], {relativeTo: this.route});
  }

  /*loadCases() { 
    this.serverService.getCase(this.userId).subscribe(
      (response: Response) => {
        let tempCase: Case;
        const data = response.json();
        console.log(data); 
        
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
  }*/
}
