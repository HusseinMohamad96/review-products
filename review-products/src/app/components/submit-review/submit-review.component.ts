import { Component } from '@angular/core';

@Component({
  selector: 'app-submit-review',
  standalone: false,
  templateUrl: './submit-review.component.html',
  styleUrl: './submit-review.component.css'
})
export class SubmitReviewComponent {
  review = {
    title: '',
    content: '',
    rating: 0,
  }

  submitReview() {

  }
}
