import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  
})

export class MenuComponent implements OnInit {
  links = ["Settings", "Account Info", "Case 1", "Case 2"];

  constructor() { }

  ngOnInit() {
  }
  
  name = "John Doe";
  
  onClick() {
     console.log("Hello");
  }

}
