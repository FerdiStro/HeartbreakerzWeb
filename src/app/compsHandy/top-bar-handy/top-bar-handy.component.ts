import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar-handy',
  templateUrl: './top-bar-handy.component.html',
  styleUrls: ['./top-bar-handy.component.css']
})
export class TopBarHandyComponent implements OnInit {

  @Output()
  selectedPageEvent =   new EventEmitter<number>()



  select(select: number){
    this.selectedPageEvent.emit(select)
  }






  constructor() {}

  ngOnInit(): void {
  }
}
