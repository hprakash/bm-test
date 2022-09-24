import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/core/base/base.component';
import * as E from 'src/app/core/enums';
import { IProfile, TypeProfile } from 'src/app/core/types';
import { ProfileService } from 'src/app/services';

@Component({
  // selector: 'app-profile-card-list',
  templateUrl: './profile-card-stack.component.html',
  // styleUrls: ['./profile-card-stack.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileCardStackComponent extends BaseComponent implements OnInit, OnDestroy {

  profileStackType: E.EProfileStack = E.EProfileStack.Featured;

  public get profiles(): IProfile[] {
    return this._profiles;
  }

  public set profiles(value: IProfile[]) {
    this._profiles = value;
  }

  isEnabled = true;
  direction = "";

  get selProfile(): TypeProfile {

    if (this._profiles.length) {
      return this._profiles[0];
    }

    return false;
  }

  private _profiles: IProfile[] = [];

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private breakpointObserver: BreakpointObserver,
    private snackBar: MatSnackBar,
  ) {
    super();
  }

  ngOnInit(): void {

    this.profileStackType = <E.EProfileStack>this.route.snapshot.data.section || E.EProfileStack.Featured;
    // console.log(this.profileStackType);

    this.breakpointObserver
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

    this.profileService.getProfiles().subscribe({
      next: (res: IProfile[]) => {
        this.profiles = res;
      }
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  onDisable(val: boolean) {
    console.log("new value received at on disable: ", val);
    this.isEnabled = !val;
  }

  fnTrackBy(idx: number, profile: IProfile) {
    return profile.id;
  }

  isSmallScreen(): boolean {
    return ['xsmall', 'small'].indexOf(this.currentScreenSize.toLowerCase()) !== -1;
  }

  doAction(val: E.EButton): void {
    // console.log('val: ', val);
    if (val === E.EButton.Yes) {
      this.showSnackMessage(this.snackBar, 'Interested');
    } else if (val === E.EButton.No) {
      this.showSnackMessage(this.snackBar, 'Not interested');
    }

    this.profiles = [
      ...this.profiles.slice(1)
    ];
  }

  onSwipe(event: any): void {

    const x = Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? "Right" : "Left") : "";
    // const y = Math.abs(event.deltaY) > 40 ? (event.deltaY > 0 ? "Down" : "Up") : "";

    // console.log(`${x}`);

    if (x === 'Right') {
      this.doAction(E.EButton.Yes);
    } else if (x === 'Left') {
      this.doAction(E.EButton.No);
    }

    // this.direction += `You swiped in <b> ${x} ${y} </b> direction <hr>`;
    this.profiles = [
      ...this.profiles.slice(1)
    ];
  }
}
