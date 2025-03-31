import { Component, OnInit } from '@angular/core';
import { FeaturedItem } from '../../models/featured-item.interface';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  constructor(private reviewService: ReviewService) { }
  featuredItems: FeaturedItem[] = [
    {
      mainImage: 'assets/images/headphones_1.jpg',
      title: 'Best Noise-Canceling Headphones',
      description: `We tested 12 models—this one stood out for comfort, battery life, and sound
              quality.`
    },
    {
      mainImage: 'assets/images/laptop_6.webp',
      title: 'Best Budget Laptops',
      description: `Great performance under $500. Here's our top choice after rigorous testing.`
    },
    {
      mainImage: 'assets/images/coffee_maker_1.webp',
      title: 'Best Home Coffee Makers',
      description: `A deep dive into the best machines for every kind of coffee drinker.`
    },
  ]

  featuredReviews: any = []

  ngOnInit() {
    this.featuredReviews = this.reviewService.featuredReviews
  }
}
