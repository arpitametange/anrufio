import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-our-ai-development-process',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './our-ai-development-process.component.html',
  styleUrl: './our-ai-development-process.component.css'
})
export class OurAiDevelopmentProcessComponent {
@Input() data: any;
}
