import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { BenefitsComponent } from '../../common-component/benefits/benefits.component';
import { IndustriesComponent } from '../../common-component/industries/industries.component';
import { EverythingYouNeedComponent } from '../../common-component/everything-you-need/everything-you-need.component';
import { TechnologiesComponent } from '../../common-component/technologies/technologies.component';
import { TestimonialComponent } from '../../common-component/testimonial/testimonial.component';
import { OurCollaborationComponent } from '../../common-component/our-collaboration/our-collaboration.component';
import { BookCallComponent } from '../../common-component/book-call/book-call.component';
import { FaqComponent } from '../../common-component/faq/faq.component';
import { HttpClient } from '@angular/common/http';
import { FAQSection } from '../../common-component/faq/faq.models';
import { ExpertiseComponent } from '../../common-component/expertise/expertise.component';

@Component({
  selector: 'app-product-engineering-services',
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
  ],

  templateUrl: './product-engineering-services.component.html',
  styleUrl: './product-engineering-services.component.css',
})
export class ProductEngineeringServicesComponent {
  faqData!: FAQSection;
  content: any;
  benefitsData: any;
  bookCall: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Load FAQ data
    this.http.get<FAQSection>('assets/json/product-engeering.json').subscribe({
      next: (data) => {
        this.faqData = data;
      },
      error: (error) => {
        console.error('Error loading FAQ data:', error);
      },
    });

    // Load Expertise content
    this.http.get('assets/json/product-expertise.json').subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (error) => {
        console.error('Error loading expertise content:', error);
      },
    });

    // Load Benefits data
    this.http.get('assets/json/product-benefits.json').subscribe({
      next: (data) => {
        this.benefitsData = data;
      },
      error: (error) => {
        console.error('Error loading benefits data:', error);
      },
    });
    this.http.get('assets/json/book-call.json').subscribe({
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
