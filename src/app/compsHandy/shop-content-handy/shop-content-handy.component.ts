import { Component, OnInit } from '@angular/core';
import {ContentClass} from "../ContentClass";

@Component({
  selector: 'app-shop-content-handy',
  templateUrl: './shop-content-handy.component.html',
  styleUrls: ['./shop-content-handy.component.css']
})
export class ShopContentHandyComponent implements OnInit {

  constructor() { }

  content:ContentClass = new ContentClass();

  ngOnInit(): void {}

}
