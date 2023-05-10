import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './comps/top-bar/top-bar.component';
import {ApplicationStateService} from "../Services/application-state.service";
import { HomeContentComponent } from './comps/home-content/home-content.component';
import { ShopContentComponent } from './comps/shop-content/shop-content.component';
import { ReleasesContentComponent } from './comps/releases-content/releases-content.component';
import { WorkContentComponent } from './comps/work-content/work-content.component';
import { ButtomSectionComponent } from './comps/buttom-section/buttom-section.component';
import { TopBarHandyComponent } from './compsHandy/top-bar-handy/top-bar-handy.component';
import { WorkContentHandyComponent } from './compsHandy/work-content-handy/work-content-handy.component';
import { HandyButtonSectionComponent } from './compsHandy/handy-button-section/handy-button-section.component';
import { ShopContentHandyComponent } from './compsHandy/shop-content-handy/shop-content-handy.component';
import { ProductComponent } from './compsHandy/shop-content-handy/product/product.component';
import { ReleasePageHandyComponent } from './compsHandy/release-page-handy/release-page-handy.component';
import { LiveSetsComponent } from './compsHandy/release-page-handy/live-sets/live-sets.component';
import {GetSpotifyDataService} from "./services /get-spotify-data.service";
import {HttpClientModule} from "@angular/common/http";
import { SongsRealesesComponent } from './compsHandy/release-page-handy/songs-realeses/songs-realeses.component';
import { MusicPlayerComponent } from './compsHandy/release-page-handy/songs-realeses/music-player/music-player.component';

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        HomeContentComponent,
        ShopContentComponent,
        ReleasesContentComponent,
        WorkContentComponent,
        ButtomSectionComponent,
        TopBarComponent,
        TopBarHandyComponent,
        WorkContentHandyComponent,
        HandyButtonSectionComponent,
        ShopContentHandyComponent,
        ProductComponent,
        ReleasePageHandyComponent,
        LiveSetsComponent,
        SongsRealesesComponent,
        MusicPlayerComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ApplicationStateService],
  bootstrap: [AppComponent]
})
export class AppModule {}


