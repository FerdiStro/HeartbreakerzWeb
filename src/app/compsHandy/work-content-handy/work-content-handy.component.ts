import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-work-content-handy',
  templateUrl: './work-content-handy.component.html',
  styleUrls: ['./work-content-handy.component.css']
})
export class WorkContentHandyComponent implements OnInit {


  @Input()
  SiteName:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
