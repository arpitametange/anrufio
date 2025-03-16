import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-our-collaboration',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './our-collaboration.component.html',
  styleUrl: './our-collaboration.component.css',
})
export class OurCollaborationComponent {}
