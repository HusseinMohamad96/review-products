import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMenuOpen = false
  navItems: { title: string, href: string }[] = [
    {
      title: 'Home',
      href: '#'
    },
    {
      title: 'Write a Review',
      href: '/#/submit-review'
    },
    {
      title: 'Best Picks',
      href: '#'
    },
    {
      title: 'Categories',
      href: '#'
    },
    {
      title: 'About',
      href: '#'
    }
  ]
}
