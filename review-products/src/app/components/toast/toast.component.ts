import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: false,
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  @Input() message = '';
  @Input() type: string = 'info';
  @Input() show = false;

  isFadingOut = false;

  ngOnChanges() {
    if (!this.show) {
      // Trigger fade-out only when show changes to false
      this.isFadingOut = true;
      setTimeout(() => {
        this.isFadingOut = false;
      }, 300); // duration must match your CSS fadeOut animation
    }
  }
}
