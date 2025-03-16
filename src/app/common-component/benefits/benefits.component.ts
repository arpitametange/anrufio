import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule, RouterModule],

  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css',
})
export class BenefitsComponent {
  @Input() data: any;
  @Input() showButton: boolean = false;

}
