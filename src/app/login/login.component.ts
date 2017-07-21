import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  @Output() loginEvent = new EventEmitter();

  ngOnInit() {
  }

  temp_login() {
    this.loginEvent.emit(null);
  }

}
