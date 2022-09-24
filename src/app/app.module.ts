import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Hammer from 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as C from './components';

import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SwiperModule } from 'swiper/angular';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    // 'swipe': { velocity: 0.4, threshold: 20, direction: Hammer.DIRECTION_ALL } // override default settings
    'swipe': { direction: Hammer.DIRECTION_HORIZONTAL } // override default settings
  }
}

// import 'hammer-timejs';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    C.ExtendedActionsComponent,
    C.DisplayPictureComponent,
    C.HomeComponent,
    C.ProfileCardStackComponent,
    C.ProfileCardViewComponent,
    C.ProfileDetailsComponent,
    C.ProfileShortlistButtonComponent,
    C.YesNoButtonsComponent,
    C.SwipePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    SwiperModule,
    HammerModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
