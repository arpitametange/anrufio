import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.css',
})
export class CaseStudyComponent {}
