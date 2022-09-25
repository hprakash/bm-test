import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseComponent } from 'src/app/core/base/base.component';
import { IProfile } from 'src/app/core/types';
import { ProfileService } from 'src/app/services';

@Component({
  selector: 'app-profile-shortlist-button',
  templateUrl: './profile-shortlist-button.component.html',
  styleUrls: ['./profile-shortlist-button.component.css']
})
export class ProfileShortlistButtonComponent extends BaseComponent {

  /**
   * Profile is the input
   */
  @Input()
  profile!: IProfile;

  /**
   * Emits true/false so that the parent component can freeze screen for api processing
   */
  @Output()
  disableEmitter: EventEmitter<boolean> = new EventEmitter();

  // inProgress = false;

  /* getIsApiProcessing(): boolean {
    return this.isApiProcessing;
  } */

  // isApiProcessing = false;

  constructor(
    private profileService: ProfileService,
    private _snackBar: MatSnackBar,
  ) {
    super();
  }

  /**
   * Will shortlist or revert based on the status
   *
   * @param val boolean
   */
  onButtonClick(val: boolean): void {

    console.log('somebody clicked me: ', val);

    /**
     * Just a way to handle negative case.
     */
    if (!this.profile) {
      console.log('oops! the component is not loaded cor');
      return;
    }

    /**
     * Just a way to handle negative case.
     */
    // if (this.getIsApiProcessing()) {
    if (this.isApiProcessing) {
      console.log('oops! Another request is already pending');
      return;
    }

    this.setProcessingState(true);

    setTimeout(() => {
      this.profileService.postShortlistProfile(this.profile.id, val).subscribe({
        next: (res: boolean | number) => {

          /* handle failure case */
          if (res === -1) {
            this._snackBar.open('Shortlisted failed. Retry', 'Close', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
            this.dismissSnackBar();
            return;
          }

          /* api succeeded */
          this.profile.isShortlisted = val;
          const message = val ? 'Shortlisted successfully' : 'Removed from your shortlist successfully';
          this._snackBar.open(message, 'Close');
          this.dismissSnackBar();

        },
        complete: () => {
          this.setProcessingState(false);
        }
      });
    }, 2000);

    // this.showSnackMessage(this._snackBar, 'Shortlisted successfully', 'Close');
  }

  setProcessingState(val: boolean): void {
    this.isApiProcessing = val;
    this.disableEmitter.emit(val);
  }

  dismissSnackBar() {
    setTimeout(() => {
      this._snackBar.dismiss();
    }, 2000);
  }
}
