import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selected:number  = 0;

  @Input()
  title:string  = "";


  @Input()
  price:string = "";


  @Input()
  products:string[]   =  [] ;

  @Input()
  productDescription:string = '';



  constructor() { }

  ngOnInit(): void {
  }

}
