import Swal from "sweetalert2";
import { EProfileStack } from "./enums";

export function askUserSweetAlert(body: string, title = 'Are you sure?') {
  return Swal.fire({
    title: title,
    html: body,
    icon: 'question',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    focusCancel: true,
  });
}

export function showInfoSweetAlert(body: string, title = 'Oops...') {
  return Swal.fire({
    title: title,
    text: body,
    icon: 'info',
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: true,
    focusCancel: false,
  });
}

/**
 * Returns label of a given stack type, or 'new born' otherwise
 * 
 * @param stype EProfileStack
 * @returns string
 */
export function getStackTypeLabel(stype: EProfileStack): string {

  switch (stype) {
    case EProfileStack.DailyRecommendation:
      return 'Daily Recommendations';

    case EProfileStack.Featured:
      return 'Featured';
  }

  return 'New born';
}
