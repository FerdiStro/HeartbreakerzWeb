import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class GetSpotifyDataService {

  READONLY_TOKEN:string  = 'BQBcQZQyl1vRBMG3CrhTa6vNb75uyBkKVhmOPROpWckjaVT6JOHDBFSmEAY2scdOW-65ljhYDhHqnlJfDGRjuS6wc8-a2p_va0m3pUNqwKYxtweBPhRZmnUXeS1_srCgc6HXka6bUUjuJ-27ANv7gKozxklwGbNDxMVAN2RiXzDZpk_tiNHmU_b2i5XSgA';
  FIELDS:string = 'items(track.artists(name),track(name,href))'
  constructor(private  http: HttpClient) { }



  getPlaylist(playlistLink: string){
    let url: string  = 'https://api.spotify.com/v1/playlists/'+GetSpotifyDataService.getPlaylistId(playlistLink)+'/tracks'
    let httpHeader  = new HttpHeaders({
      'fields': this.FIELDS,
      'Authorization': 'Bearer ' + this.READONLY_TOKEN,
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
    return this.http.get(url, {headers : httpHeader})
  }

  private static getPlaylistId(link :string) : string{
    let split :string[] =  link.split("?")[0].split("/")
    console.log(split[split.length-1])
    return split[split.length-1]
  }
}
