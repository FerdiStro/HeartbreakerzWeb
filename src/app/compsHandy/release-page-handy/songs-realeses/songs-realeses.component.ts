import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-songs-realeses',
  templateUrl: './songs-realeses.component.html',
  styleUrls: ['./songs-realeses.component.css']
})
export class SongsRealesesComponent implements OnInit {
  @Input()
  youTubeURL:string = "";
  @Input()
  trackTitle:string = '';
  @Input()
  playerUrl:string  = '' ;


  img:string  ='';

  constructor() {

  }





  ngOnInit(): void {

    this.img  = "https://i.ytimg.com/vi/"+this.youTubeURL+"/maxresdefault.jpg"

    }


}

