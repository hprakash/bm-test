import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/core/base/base.component';
import { TypeProfile } from 'src/app/core/types';
import { ProfileService } from 'src/app/services';

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProfileDetailsComponent extends BaseComponent implements OnInit {

  profile: TypeProfile = false;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
  ) {
    super();
  }

  ngOnInit(): void {

    const profileId = Number(this.route.snapshot.paramMap.get('id')) || 0;

    if (!profileId) {
      // no need to continue, show error status
      return;
    }

    this.profileService.getProfileById(profileId)
      .subscribe({
        next: (res) => {
          if (res) {
            this.profile = res;
          }
        }
      });
  }

}
