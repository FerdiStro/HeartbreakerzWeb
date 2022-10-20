import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Output()
  selectedPageEvent =   new EventEmitter<number>()



  select(select: number){
   this.selectedPageEvent.emit(select)
  }






  constructor() {}

  ngOnInit(): void {
  }

}
