import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { TestimonialComponent } from "../testimonial/testimonial.component";

@Component({
  selector: 'app-contact-us',
  imports: [HeaderComponent, FooterComponent, TestimonialComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
