import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {


  name: string = 'Rahid Uddin';

  character: string = 'hello js';

  onOff: boolean = true;

  offOn: boolean = false;

  myMethod(): string {
    return `My name is ${this.name}`;
  }

  // property binding:

  name2: string = 'Ulala';

  onSale: boolean = false;

  classExpression: string = 'my-class-1 my-class-2 my-class-3';

  constructor() {
  }

  ngOnInit(): void {

  }

  red:string = 'red';

  status:boolean = true;

  status2:boolean = true;

}



