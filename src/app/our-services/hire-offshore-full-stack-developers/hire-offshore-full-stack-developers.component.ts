import { Component } from '@angular/core';
import { RemoteContactUsFormComponent } from '../../common-component/remote-contact-us-form/remote-contact-us-form.component';
import { HeaderComponent } from '../../header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BenefitsComponent } from '../../common-component/benefits/benefits.component';
import { TechnologiesComponent } from '../../common-component/technologies/technologies.component';
import { DedicatedExpertiseComponent } from '../../common-component/dedicated-expertise/dedicated-expertise.component';
import { TestimonialComponent } from '../../common-component/testimonial/testimonial.component';
import { FooterComponent } from '../../footer/footer.component';
import { FaqComponent } from '../../common-component/faq/faq.component';
import { FAQSection } from '../../common-component/faq/faq.models';
import { RecentBlogComponent } from '../../common-component/recent-blog/recent-blog.component';
interface HireData {
  tagline: string;
  title: string;
  description: string;
  benefits: string[];
}
@Component({
  selector: 'app-hire-offshore-full-stack-developers',
  imports: [RemoteContactUsFormComponent,HeaderComponent, CommonModule,
      RouterModule,BenefitsComponent,TechnologiesComponent,DedicatedExpertiseComponent,TestimonialComponent,FooterComponent,FaqComponent,RecentBlogComponent],
  templateUrl: './hire-offshore-full-stack-developers.component.html',
  styleUrl: './hire-offshore-full-stack-developers.component.css'
})
export class HireOffshoreFullStackDevelopersComponent {
  hireData: HireData | null = null;
  benefitsData: any;
  faqData!: FAQSection;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchHireData();
    this.http.get('assets/json/commitment.json').subscribe({
      next: (data) => {
        this.benefitsData = data;
      },
      error: (error) => {
        console.error('Error loading benefits data:', error);
      },
    });

    this.http.get<FAQSection>('assets/json/product-engeering.json').subscribe({
      next: (data) => {
        this.faqData = data;
      },
      error: (error) => {
        console.error('Error loading FAQ data:', error);
      },
    });
  }

  fetchHireData(): void {
    this.http.get<HireData>('assets/json/hire-offshore-full-stack-developers.json').subscribe(
      (data) => {
        this.hireData = data;
      },
      (error) => {
        console.error('Error fetching hire data:', error);
      }
    );
  }


  handleFaqClick(faq: any): void {
    console.log('FAQ clicked:', faq);
  }
}
