import { Component, OnInit, ViewEncapsulation } from '@angular/core';


// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-swipe-page',
  templateUrl: './swipe-page.component.html',
  styleUrls: ['./swipe-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SwipePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let i = 0;
  }

}
