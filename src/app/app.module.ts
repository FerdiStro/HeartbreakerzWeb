import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './comps/top-bar/top-bar.component';
import {ApplicationStateService} from "../Services /application-state.service";
import { HomeContentComponent } from './comps/home-content/home-content.component';
import { ShopContentComponent } from './comps/shop-content/shop-content.component';
import { ReleasesContentComponent } from './comps/releases-content/releases-content.component';
import { WorkContentComponent } from './comps/work-content/work-content.component';
import { ButtomSectionComponent } from './comps/buttom-section/buttom-section.component';
import { TopBarHandyComponent } from './compsHandy/top-bar-handy/top-bar-handy.component';
import { WorkContentHandyComponent } from './compsHandy/work-content-handy/work-content-handy.component';

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
        WorkContentHandyComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [ApplicationStateService],
  bootstrap: [AppComponent]
})
export class AppModule {}


