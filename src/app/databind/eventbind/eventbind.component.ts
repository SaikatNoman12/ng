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

  data: boolean = true;
  msg: string = '';
  onAddCart(): void {
    if (this.data) {
      this.msg = 'Add Product In Cart';
      this.data = false;
    }
    else {
      console.log('Already this data has been added!');
    }
  }

  onInputData(event: any) {
    console.log(event.target.value);
  }

  proD: any = '';
  addProduct(event: any): void {
    this.proD = `${event.target.value} is added in cart. 
    `;
  }

}

