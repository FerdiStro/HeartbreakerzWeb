import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.css']
})
export class WorkContentComponent implements OnInit {


  @Input()
  SiteName:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
