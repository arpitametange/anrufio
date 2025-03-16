import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
})
export class TechnologiesComponent {
  categories: string[] = [];
  selectedCategory: string = '';
  data: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/json/technologies.json').subscribe((data: any) => {
      this.data = data;
      this.categories = Object.keys(data);
      this.selectedCategory = this.categories[0];
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
