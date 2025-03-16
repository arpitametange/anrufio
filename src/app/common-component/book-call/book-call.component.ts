import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-call',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-call.component.html',
  styleUrl: './book-call.component.css',
})
export class BookCallComponent {
  @Input() data: any;
  @Output() bookCallClicked = new EventEmitter<void>();

  onBookCallClick() {
    this.bookCallClicked.emit();
  }
}
