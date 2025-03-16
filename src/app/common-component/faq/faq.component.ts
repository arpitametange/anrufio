import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FAQSection, FAQ } from './faq.models';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  @Input() faqSection!: FAQSection;
  @Output() faqClicked = new EventEmitter<FAQ>();

  openFaq: FAQ | null = null;

  toggleFaq(faq: FAQ): void {
    this.openFaq = this.openFaq === faq ? null : faq;
    this.faqClicked.emit(faq);
  }
}
