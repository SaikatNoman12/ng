import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-bind',
  templateUrl: './class-style-bind.component.html',
  styleUrls: ['./class-style-bind.component.css']
})
export class ClassStyleBindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myProperty: boolean = true;

  myObj: object = {
    class1: true,
    class2: true,
    class3: false
  };

  objPro: object = {
    'background': 'blue',
    'color': 'yellow'
  }

  objPro2: object = {
    background: 'gray',
    color: 'red',
    wordBreak:'break-all'
  }

  onArr = ['heelo', 'reoo'];


}
