import { Component, OnInit } from '@angular/core';
import {ContentClass} from "../ContentClass";

@Component({
  selector: 'app-release-page-handy',
  templateUrl: './release-page-handy.component.html',
  styleUrls: ['./release-page-handy.component.css']
})
export class ReleasePageHandyComponent implements OnInit {

  constructor() {

  }
  content:ContentClass = new ContentClass();

  ngOnInit(): void {

  }

}
