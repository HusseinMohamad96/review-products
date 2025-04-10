import { Component } from '@angular/core';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-submit-review',
  standalone: false,
  templateUrl: './submit-review.component.html',
  styleUrl: './submit-review.component.css'
})
export class SubmitReviewComponent {

  constructor(private reviewService: ReviewService) {

  }
  review = {
    title: '',
    content: '',
    rating: 0,
    reviewer: '',
    date: new Date().toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    avatarUrl: 'https://www.gravatar.com/avatar/?d=mp'
  }

  toast = {
    show: false,
    message: 'Review submitted successfully!',
    type: 'success'
  };


  submitReview() {
    if (this.review.title && this.review.content && this.review.reviewer) {
      this.reviewService.featuredReviews.unshift(this.review)
      this.toast.type = 'success'
      this.toast.message = 'Review submitted successfully!'
      this.toast.show = true
      setTimeout(() => this.toast.show = false, 2000)
      this.review = {
        title: '',
        content: '',
        rating: 0,
        reviewer: '',
        date: new Date().toLocaleDateString(),
        avatarUrl: 'https://www.gravatar.com/avatar/?d=mp'
      }
    }
    else {
      this.toast.type = 'error'
      this.toast.message = 'Please fill out all of the fields!'
      this.toast.show = true
      setTimeout(() => this.toast.show = false, 2000)
    }
  }
}
