import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  nodes = [
    {id: 1,name: 'Devices',
      children: [
        {id: 2, name: 'device1',
          children: [
            {id: 3, name: 'image1',
              children: [
                {id: 4, name: 'relevant files'}
              ]
            },
            {id: 4, name: 'image2',
              children: [
                {id: 4, name: 'relevant files'}
              ]
            },
          ]
        },
        {id: 5, name: 'device2',
          children: [
            {id: 6, name: 'image1',
              children: [
                {id: 4, name: 'relevant files'}
              ]
            },
            {id: 7, name: 'image2',
                children: [
                {id: 4, name: 'relevant files'}
              ]
            }
          ]
        }
      ]
    },
  ];

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
