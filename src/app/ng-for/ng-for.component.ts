import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgFORComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tv
  // https://i5.walmartimages.ca/images/Enlarge/302/234/6000201302234.jpg

  // washing machine
  // https://media.miele.com/images/2000017/200001782/20000178269.png?impolicy=hero&imwidth=2000&x=724&y=1679&w=3344&h=1880&

  // laptop
  // https://cdn1.productnation.co/stg/sites/1/624bf7f569799.jpeg

  // mobile
  // https://www.mobiledokan.com/wp-content/uploads/2022/10/itel-Vision-5.jpg

  products: any[] = [
    {
      name: 'TV',
      price: 23043,
      uniqueId: 1001,
      img: 'https://i5.walmartimages.ca/images/Enlarge/302/234/6000201302234.jpg'
    },
    {
      name: 'Mobile',
      price: 23043,
      uniqueId: 1002,
      img: 'https://www.mobiledokan.com/wp-content/uploads/2022/10/itel-Vision-5.jpg'
    },
    {
      name: 'Laptop',
      price: 23043,
      uniqueId: 1003,
      img: 'https://cdn1.productnation.co/stg/sites/1/624bf7f569799.jpeg'
    },
    {
      name: 'Washing Machine',
      price: 23043,
      uniqueId: 1004,
      img: 'https://media.miele.com/images/2000017/200001782/20000178269.png?impolicy=hero&imwidth=2000&x=724&y=1679&w=3344&h=1880&'
    }

  ];

  styleObj: object = {
    'width': '100px',
    'height': '100px',
    'object-fit': 'cover'
  };

  styleObj2: object = {
    'padding': '43px'
  };

  isTrue:boolean = true;

}
