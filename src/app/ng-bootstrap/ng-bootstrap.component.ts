import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ng-bootstrap',
  templateUrl: './ng-bootstrap.component.html',
  styleUrls: ['./ng-bootstrap.component.css']
})
export class NgBootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = ['Item 1', 'Item 2', 'Item 3'];

  isCollapsed = false;

}
