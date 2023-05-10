import { Component, OnInit } from '@angular/core';
import {GetSpotifyDataService} from "../../services /get-spotify-data.service";
import {RequestModel} from "../../services /Objects/RequestModel";
import {Songs} from "../../services /Objects/Songs";
// import {GetYoutubeDataService} from "../../services /get-youtube-data.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RequestObject} from "../../services /Objects/YouTube/RequestObject";
import { SyncRequestClient } from 'ts-sync-request/dist'

@Component({
  selector: 'app-releases-content',
  templateUrl: './releases-content.component.html',
  styleUrls: ['./releases-content.component.css']
})
export class ReleasesContentComponent implements OnInit {


  ngOnInit(): void {
  }



}
