import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dedicated-expertise',
  imports: [CommonModule],
  templateUrl: './dedicated-expertise.component.html',
  styleUrl: './dedicated-expertise.component.css'
})
export class DedicatedExpertiseComponent {
  content: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/json/dedicated-expertise.json').subscribe((data) => {
      this.content = data;
    });
}
}