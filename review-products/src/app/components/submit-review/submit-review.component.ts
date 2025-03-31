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

  submitReview() {
    this.reviewService.featuredReviews.unshift(this.review)
    this.review = {
      title: '',
      content: '',
      rating: 0,
      reviewer: '',
      date: new Date().toLocaleDateString(),
      avatarUrl: 'https://www.gravatar.com/avatar/?d=mp'
    }
  }
}
