import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { IProfile } from 'src/app/core/types';

@Component({
  selector: 'app-yes-no-buttons',
  templateUrl: './yes-no-buttons.component.html',
  styleUrls: ['./yes-no-buttons.component.css']
})
export class YesNoButtonsComponent extends BaseComponent implements OnInit {

  @Input()
  profile!: IProfile;

  @Output()
  buttonClicked: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit(): void {
    let i = 0;
  }

  yesClick() {
    this.buttonClicked.emit(true);
  }

  noClick() {
    this.buttonClicked.emit(false);
  }

}
