import { Component, Input } from '@angular/core';
import { FeaturedItem } from '../../models/featured-item.interface';

@Component({
  selector: 'app-featured-item',
  standalone: false,
  templateUrl: './featured-item.component.html',
  styleUrl: './featured-item.component.css'
})
export class FeaturedItemComponent {

  @Input() featuredItem!: FeaturedItem
}
