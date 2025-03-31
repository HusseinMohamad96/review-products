import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
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
  {
    path: 'about',
    component: AboutPageComponent
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
