import {Component, Input} from '@angular/core';
import {ApplicationStateService} from "../Services /application-state.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heartbreakerz';

  //Mobile Boolean
  isPhoneSize :boolean;
  //Page view (0 = home ; 1 =  shop; 2 =  releases)
  selectedSite:number = 0;


  selectSite(test:number){
    console.log(test);
    this.selectedSite  =  test;
  }





  constructor(private service:ApplicationStateService) {
    this.isPhoneSize  = service.getIsMobileResolution();
  }


}
