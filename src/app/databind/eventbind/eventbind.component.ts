import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  msg: string = '';
  data: boolean = true;
  onAddCart(): void {
    if (this.data) {
      this.msg = 'Add Product In Cart';
      this.data = false;
    }
    else {
      console.log('Already this data has been added!');
    }
  }

}
