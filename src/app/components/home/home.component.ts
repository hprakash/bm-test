import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/core/base/base.component';
import { IProfile } from 'src/app/core/types';
import { ProfileService } from 'src/app/services';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent extends BaseComponent implements OnInit, OnDestroy {

  @ViewChild("swiperRef", { static: false })
  sliderRef?: SwiperComponent;

  profiles: IProfile[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private profileService: ProfileService,
    private Router: Router,
  ) {
    super();

    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }

  ngOnInit(): void {

    this.profileService.getProfiles()
      .subscribe({
        next: (res) => {
          this.profiles = res;
        },
        error: (err) => {
          // TO-DO handle error here
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  profileClicked(profile: IProfile) {
    if (profile) {
      this.Router.navigate(['/', this.paths.PROFILE_DETAILS, profile.id]);
    }
  }

  /*  dpClicked(count: number, profile: IProfile) {
     if (profile) {
       this.Router.navigate(['/', this.paths.PROFILE_DETAILS, profile.id]);
     }
   } */

  buttonClicked(val: boolean, profile: IProfile) {
    if (val) {
      this.redirectToDetails(profile);
    } else {

      if (this.isSmallScreen()) {

        const index = this.profiles.indexOf(profile);
        if (this.profiles[index + 1]) {
          document.getElementById('profile-box-' + this.profiles[index + 1].id)?.focus();
        }

      } else {
        this.sliderRef?.swiperRef.slideNext();
      }
    }
  }

  redirectToDetails(profile: IProfile) {
    if (profile) {
      this.Router.navigate(['/', this.paths.PROFILE_DETAILS, profile.id]);
    }
  }

  isSmallScreen(): boolean {
    return ['xsmall', 'small'].indexOf(this.currentScreenSize.toLowerCase()) !== -1;
  }

}
