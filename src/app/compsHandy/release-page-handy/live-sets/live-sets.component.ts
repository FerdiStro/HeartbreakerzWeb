import {Component, Input, OnInit} from '@angular/core';
import {GetSpotifyDataService} from "../../../services /get-spotify-data.service";
import {RequestModel} from "../../../services /Objects/RequestModel";
import {Songs} from "../../../services /Objects/Songs";

@Component({
  selector: 'app-live-sets',
  templateUrl: './live-sets.component.html',
  styleUrls: ['./live-sets.component.css']
})
export class LiveSetsComponent implements OnInit {
  // curl -X "GET" "https://api.spotify.com/v1/playlists/4P4jn7WQ9INDPYk47R7EXd/tracks?market=ES&fields=items(track.artists(name)%2Ctrack(name%2Chref))&limit=50&offset=5" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQDQjtrZyllY53F0MNYeB45yxtFj4ah0ebFeom-qMYej8O4ns_QfaaKI1NKbpOEB-KcdJLR0Skrx42TxBzO-47sFuApxm2Te8WmWHg1WC2MWPc5ijyR6ouEopYaLcKjlNyU8cHPNeQTVkEjepyy_8MiztVDZ4I0a72QDIwhjR37MCS9sjZDa7PXPvRiMww"
  // https://developer.spotify.com/console/get-playlist-tracks/?playlist_id=3cEYpjA9oz9GiPac4AsH4n&market=ES&fields=items(added_by.id%2Ctrack(name%2Chref%2Calbum(name%2Chref)))&limit=10&offset=5&additional_types=


  constructor(private  request : GetSpotifyDataService) {
   request.getPlaylist(this.link).subscribe(data => {
      let jsonData=  JSON.stringify(data, null, "  ");
      let requestObject : RequestModel = JSON.parse(jsonData);
      this.trackList = requestObject.items;
    }, error => {
     this.errorString  =  JSON.stringify(error, null, "  ");
   })


  }
  errorString:string = ' ';

  trackList:Songs[] = [];

  @Input()
  date:string="";
  @Input()
  pictures:string[]=   [];
  @Input()
  pictureFormat:string[] = [] ;

  link:string = "https://open.spotify.com/playlist/7FM2t8CnAp7GTnpLGtiyOl?si=c87a04cbdc33487f"



  @Input()
  musicNames:string[]   = [];

  selected:number = 0;








  select(select:number){
    this.selected =  select;
  }

  ngOnInit(): void {


  }

}
