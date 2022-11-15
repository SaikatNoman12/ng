import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-splice',
  templateUrl: './push-splice.component.html',
  styleUrls: ['./push-splice.component.css']
})
export class PushSpliceComponent implements OnInit {

  objData: object = {
    'padding-top': '15px'
  }



  constructor() { }

  ngOnInit(): void {
  }

  items: any[] = [];


  onAddData(inData: any) {
    if (inData.value === '' || inData.value.trim() === '') {
      return;
    }

    this.items.push({
      name: inData.value
    });

    inData.value = '';
  }

  removeData(item: number) {
    this.items.splice(item, 1);
  }


  rvData: any;
  inNumberData: any;

  onRemoveInput(inputRemove: any) {

    if (inputRemove.value === '' || inputRemove.value.trim() === '') {
      return;
    }

    this.rvData = this.items.findIndex((ele) => ele.name === inputRemove.value);

    if (this.rvData !== -1) {
      this.items.splice(this.rvData, 1);
    }
    else {
      return;
    }

  }
}
