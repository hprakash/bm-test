import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { TypeProfile } from 'src/app/core/types';

@Component({
  selector: 'app-profile-card-view',
  templateUrl: './profile-card-view.component.html',
  styleUrls: ['./profile-card-view.component.css']
})
export class ProfileCardViewComponent extends BaseComponent {

  @Input()
  profile: TypeProfile = false;

  @Input()
  showPremiumInfo = false;

  @Output()
  bodyClick: EventEmitter<TypeProfile> = new EventEmitter();

  @Output()
  dpClicked: EventEmitter<number> = new EventEmitter();

  counter = 0;

  constructor() {
    super();
  }

  onClick() {
    this.bodyClick.emit(this.profile);
  }

  doLog() {
    console.log('test');
  }

  /**
   * If the parent observing click, then emit a new value.
   */
  photoClick() {
    if (this.bodyClick.observers.length) {
      // this.bodyClick.emit(this.counter++);
      this.bodyClick.emit(this.profile);
    }
  }

}
