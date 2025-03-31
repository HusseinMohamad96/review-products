import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SubmitReviewComponent } from './components/submit-review/submit-review.component';

const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'submit-review',
    component: SubmitReviewComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
