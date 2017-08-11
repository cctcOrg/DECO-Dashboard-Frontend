import { Component, Input } from '@angular/core';
import {ServerService} from './server.service';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('150ms ease-in-out')),
      transition('out => in', animate('150ms ease-in-out'))
    ]),
  ]
})

export class AppComponent {
  title = 'Hello User';
  desc = '';
  imgName = '';
  psmid = '';
  bsmid = '';
  clicked = false;
  servers = [];
  isHomePage = false;
  isLoginPage = true;
  isCasePage = false;
    
  constructor(private serverService: ServerService) { }
  
  menuState:string = 'out';

  viewCase() {
    this.isHomePage = false;
    this.isCasePage = true;
  }

  viewMenu() {
    this.isHomePage = true;
    this.isCasePage = false;
  }
  
  temp_login() {
    this.isLoginPage = false;
    this.isHomePage = true;
  }
 
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}

