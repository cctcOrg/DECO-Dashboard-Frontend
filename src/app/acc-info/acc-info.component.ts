import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-acc-info',
  templateUrl: './acc-info.component.html',
  styleUrls: ['./acc-info.component.css']
})
export class AccInfoComponent implements OnInit {

  email = "";
  first = "";
  last = "";
   

  newUser: User = {
     email: this.email,
     firstName: this.first,
     lastName: this.last
  };

  constructor() { }

  ngOnInit() {
  }
  

}
