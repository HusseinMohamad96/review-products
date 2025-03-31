import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  featuredReviews = [
    {
      title: 'Absolutely love this gadget!',
      content:
        'This is hands down the best purchase I’ve made this year. It’s sleek, reliable, and just works.',
      rating: 5,
      reviewer: 'Alex Carter',
      date: '22 March 2025',
      avatarUrl: 'https://i.pravatar.cc/100?img=12',
    },
    {
      title: 'Great value for the price',
      content:
        'I didn’t expect much at this price point, but this completely blew me away. Would recommend to anyone.',
      rating: 4,
      reviewer: 'Jamie Lin',
      date: '14 January 2025',
      avatarUrl: 'https://i.pravatar.cc/100?img=24',
    },
  ];

}
