import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import * as FUNCTIONS from '../functions';
// import * as ENUM from '../enums';
import { Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import * as PATH from '../path';

/**
 * Base component that gives basic shape to the extended component.
 * This component is marked as abstract and should not be used directly.
 */
@Component({
  template: ''
})
export abstract class BaseComponent {

  /**
   * all the route paths can be accessed from here
   */
  public paths = PATH;
  // public enums = ENUM;

  /**
   * all the utility functions  can be accessed from here
   */
  public func = FUNCTIONS;

  /**
   * A common var to store api querying statue
   */
  isApiProcessing = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  constructor() {
  }

  /**
   * this snack message can exist here or in functions.ts
   *
   * TODO: Make the autoclose into a preference with a default value
   *
   * @param snackBar 
   * @param message 
   * @param action 
   */
  showSnackMessage(snackBar: MatSnackBar, message: string, action = 'CLOSE') {

    snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });

    setTimeout(() => {
      snackBar.dismiss();
    }, 2000);
  }

}
