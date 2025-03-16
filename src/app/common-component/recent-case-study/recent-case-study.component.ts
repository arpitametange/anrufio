import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recent-case-study',
  standalone: true,
      imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        
      ],
  templateUrl: './recent-case-study.component.html',
  styleUrl: './recent-case-study.component.css'
})
export class RecentCaseStudyComponent {

}
