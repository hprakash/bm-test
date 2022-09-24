import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as C from './components';
import * as E from './core/enums';
import * as PATH from './core/path';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: PATH.STACK_FEATURED
  },
  {
    path: PATH.HOME,
    component: C.HomeComponent
  },
  {
    path: PATH.PROFILE_DETAILS + '/:id',
    component: C.ProfileDetailsComponent,
  },
  {
    path: PATH.STACK_DAILY_RECOMMENDATIONS,
    component: C.ProfileCardStackComponent,
    data: {
      section: E.EProfileStack.DailyRecommendation
    }
  },
  {
    path: PATH.STACK_FEATURED,
    component: C.ProfileCardStackComponent,
    // component: CardViewComponent,
    data: {
      section: E.EProfileStack.Featured
    }
  },
  {
    path: PATH.SWIPE_TEST,
    component: C.SwipePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
