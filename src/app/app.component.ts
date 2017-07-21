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
  isHomePage = true;
  isNotLoggedIn = true;
  
  
  
 constructor(private serverService: ServerService) {

  }
  
  menuState:string = 'out';
  
  viewCase() {
    this.isHomePage = !this.isHomePage;
  }
  
  temp_login() {
    this.isNotLoggedIn = false;
   
  }
 
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  

  onSubmit() {
    this.clicked = true;
    const json = {
      deviceDesc: this.desc,
      imageName: this.imgName,
      primaryStorageMediaId: this.psmid,
      backupStorageMediaId: this.bsmid
    };
    this.servers.push(JSON.stringify(json));
    this.serverService.storeServer(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}

