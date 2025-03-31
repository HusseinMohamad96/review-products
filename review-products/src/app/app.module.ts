import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedItemComponent } from './components/featured-item/featured-item.component';
import { FeaturedReviewComponent } from './components/featured-review/featured-review.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SubmitReviewComponent } from './components/submit-review/submit-review.component';
import { ToastComponent } from './components/toast/toast.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FeaturedItemComponent,
    SubmitReviewComponent,
    LandingPageComponent,
    HeaderComponent,
    FeaturedReviewComponent,
    ToastComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
