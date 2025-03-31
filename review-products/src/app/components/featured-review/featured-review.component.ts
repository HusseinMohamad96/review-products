import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-review',
  templateUrl: './featured-review.component.html',
  standalone: false
})
export class FeaturedReviewComponent {
  @Input() review!: {
    title: string;
    content: string;
    rating: number;
    reviewer: string;
    date: string;
    avatarUrl: string;
  };
}
