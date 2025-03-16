import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog/blog.component';
import { CaseStudyComponent } from './blog/case-study/case-study.component';
import { ProductEngineeringServicesComponent } from './our-services/product-engineering-services/product-engineering-services.component';
import { GenerativeAiDevelopmentComponent } from './our-services/generative-ai-development/generative-ai-development.component';
import { HireOffshoreFullStackDevelopersComponent } from './our-services/hire-offshore-full-stack-developers/hire-offshore-full-stack-developers.component';
import { RemoteContactUsFormComponent } from './common-component/remote-contact-us-form/remote-contact-us-form.component';
import { ContactUsComponent } from './common-component/contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'case-study', component: CaseStudyComponent },
  {
    path: 'product-engineering-services',
    component: ProductEngineeringServicesComponent,
  },
  {
    path: 'generative-ai-development-company',
    component: GenerativeAiDevelopmentComponent,
  },
  {
    path: 'hire-offshore-full-stack-developers',
    component: HireOffshoreFullStackDevelopersComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
];
