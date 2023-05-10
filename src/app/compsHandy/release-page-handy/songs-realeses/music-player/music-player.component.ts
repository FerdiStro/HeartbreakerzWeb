import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {


  @Input()
  url:string =  ''  ;


  currentlyPlaying:boolean  =  false;

  constructor() { }

  ngOnInit(): void {
  }

}
