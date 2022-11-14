import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switc-case',
  templateUrl: './switc-case.component.html',
  styleUrls: ['./switc-case.component.css']
})
export class SwitcCaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  objFont: object = {
    'font-size': '20px'
  }

  switchVar: string = '';

  onSelectChange(event: any): void {
    console.log(event.target.value.toLowerCase());
    this.switchVar = event.target.value.toLowerCase();
  }

}
