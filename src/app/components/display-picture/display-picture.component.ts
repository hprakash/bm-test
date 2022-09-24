import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProfile } from 'src/app/core/types';

@Component({
  selector: 'app-display-picture',
  templateUrl: './display-picture.component.html',
  styleUrls: ['./display-picture.component.css']
})
export class DisplayPictureComponent {

  @Input()
  profile!: IProfile;

  @Input()
  curvedTopClass = '';

  constructor() { }
}
