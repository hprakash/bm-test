import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/core/base/base.component';
import { IProfile } from 'src/app/core/types';
import { ProfileService } from 'src/app/services';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent extends BaseComponent implements OnInit, OnDestroy {

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

  dpClicked(count: number, profile: IProfile) {
    if (profile) {
      this.Router.navigate(['/', this.paths.PROFILE_DETAILS, profile.id]);
    }
  }

  buttonClicked(val: boolean, profile: IProfile) {
    if (val) {
      this.redirectToDetails(profile);
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
