import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BenefitsComponent } from '../../common-component/benefits/benefits.component';
import { BookCallComponent } from '../../common-component/book-call/book-call.component';
import { EverythingYouNeedComponent } from '../../common-component/everything-you-need/everything-you-need.component';
import { ExpertiseComponent } from '../../common-component/expertise/expertise.component';
import { FaqComponent } from '../../common-component/faq/faq.component';
import { IndustriesComponent } from '../../common-component/industries/industries.component';
import { OurCollaborationComponent } from '../../common-component/our-collaboration/our-collaboration.component';
import { TechnologiesComponent } from '../../common-component/technologies/technologies.component';
import { TestimonialComponent } from '../../common-component/testimonial/testimonial.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { HttpClient } from '@angular/common/http';
import { FAQSection } from '../../common-component/faq/faq.models';
import { OurAiDevelopmentProcessComponent } from '../../common-component/our-ai-development-process/our-ai-development-process.component';

@Component({
  selector: 'app-generative-ai-development',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent,
    HeaderComponent,
    BenefitsComponent,
    IndustriesComponent,
    EverythingYouNeedComponent,
    TechnologiesComponent,
    TestimonialComponent,
    OurCollaborationComponent,
    BookCallComponent,
    FaqComponent,
    ExpertiseComponent,
    OurAiDevelopmentProcessComponent,
  ],
  templateUrl: './generative-ai-development.component.html',
  styleUrl: './generative-ai-development.component.css',
})
export class GenerativeAiDevelopmentComponent {
  faqData!: FAQSection;
  content: any;
  benefitsData: any;
  aiProcess: any;
  bookCall: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<FAQSection>('assets/json/product-engeering.json').subscribe({
      next: (data) => {
        this.faqData = data;
      },
      error: (error) => {
        console.error('Error loading FAQ data:', error);
      },
    });

    this.http.get('assets/json/generative-ai-development.json').subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (error) => {
        console.error('Error loading expertise content:', error);
      },
    });
    this.http.get('assets/json/gen-ai-benefits.json').subscribe({
      next: (data) => {
        this.benefitsData = data;
      },
      error: (error) => {
        console.error('Error loading benefits data:', error);
      },
    });
    this.http.get('assets/json/ai-development-process.json').subscribe({
      next: (data) => {
        this.aiProcess = data;
      },
      error: (error) => {
        console.error('Error loading benefits data:', error);
      },
    });
    this.http.get('assets/json/book-call-ai.json').subscribe({
      next: (data) => {
        this.bookCall = data;
      },
      error: (error) => {
        console.error('Error loading benefits data:', error);
      },
    });
  }

  handleFaqClick(faq: any): void {
    console.log('FAQ clicked:', faq);
  }
}

