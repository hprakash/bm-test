import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EButton } from 'src/app/core/enums';
import { IProfile, TypeProfile } from 'src/app/core/types';

@Component({
  selector: 'app-extended-actions',
  templateUrl: './extended-actions.component.html',
  styleUrls: ['./extended-actions.component.css']
})
export class ExtendedActionsComponent implements OnInit {

  @Input()
  profile: TypeProfile = false;

  @Output()
  buttonClicked: EventEmitter<EButton> = new EventEmitter();

  public buttonTypes: typeof EButton = EButton;

  constructor() { }

  ngOnInit(): void {
    let i = 0;
  }

  onDisable(val: boolean) {
    console.log("new value received at on disable: ", val);
    // this.isEnabled = !val;
  }

  sendButtonPress(val: EButton) {
    // TODO need to check wether correct val is incoming

    this.buttonClicked.emit(val);
  }
}
