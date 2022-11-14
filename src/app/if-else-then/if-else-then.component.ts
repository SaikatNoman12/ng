import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else-then',
  templateUrl: './if-else-then.component.html',
  styleUrls: ['./if-else-then.component.css']
})
export class IfElseThenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isValid: boolean = false;

  onBtnClick(): void {
    this.isValid = true;
  }

  isValidTwo = false;
  onBtnClickTwo(): void {
    this.isValidTwo = true;
  }
}
