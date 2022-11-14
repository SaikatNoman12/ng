import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refference',
  templateUrl: './template-refference.component.html',
  styleUrls: ['./template-refference.component.css']
})
export class TemplateRefferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onShowText(datas: any): void {
    datas.innerHTML += ' HELLLOOOOOO JAVASCRIPT! ';
  }

  addInfo(inPut: any, inShow: any): void {
    if (inPut.value) {

      inShow.innerHTML += inPut.value + '<br>';
      inPut.value = '';

    }
    else{

      inPut.value;

    }

  }

}
