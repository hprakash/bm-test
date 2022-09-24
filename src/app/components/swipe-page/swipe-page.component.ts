import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IProfile } from 'src/app/core/types';
import { ProfileService } from 'src/app/services';


// import Swiper core and required modules
import SwiperCore, { EffectCards, Pagination, Navigation } from "swiper";
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([EffectCards, Pagination, Navigation]);

@Component({
  selector: 'app-swipe-page',
  templateUrl: './swipe-page.component.html',
  styleUrls: ['./swipe-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SwipePageComponent implements OnInit {

  @ViewChild("swiperRef", { static: false })
  sliderRef!: SwiperComponent;

  profiles: IProfile[] = [];

  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {

    this.profileService.getProfiles().subscribe({
      next: (res: IProfile[]) => {
        this.profiles = res;
      }
    });
  }

  append() {
    this.sliderRef.swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + 3 + "</div>"
    );
  }

}
