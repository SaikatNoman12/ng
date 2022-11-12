import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string = 'Rahid Uddin'; 

  character:string = 'hello js';

  onOff:boolean = true;

  offOn:boolean = false;
}
