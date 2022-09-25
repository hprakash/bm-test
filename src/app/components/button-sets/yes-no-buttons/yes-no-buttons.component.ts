import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProfile } from 'src/app/core/types';

/**
 * Component to show yes, no buttons that can be used inside a profile card compoenent
 */
@Component({
  selector: 'app-yes-no-buttons',
  templateUrl: './yes-no-buttons.component.html',
  // styleUrls: ['./yes-no-buttons.component.css']
})
export class YesNoButtonsComponent {

  @Input()
  profile!: IProfile;

  @Output()
  buttonClicked: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  /**
   * Emits true on click to listener.
   *
   * Note: EButton enum is not used here to show the possibilities of angular
   */
  yesClick(): void {
    this.buttonClicked.emit(true);
  }

  /**
   * Emits false on click to listener.
   *
   * Note: EButton enum is not used here to show the possibilities of angular
   */
  noClick(): void {
    this.buttonClicked.emit(false);
  }

}
