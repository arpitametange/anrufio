import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recent-blog',
  standalone: true,
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      
    ],
  templateUrl: './recent-blog.component.html',
  styleUrl: './recent-blog.component.css'
})
export class RecentBlogComponent {

}
