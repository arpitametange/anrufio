import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trusted-brands',
  standalone: true,
    imports: [
      CommonModule,
      RouterModule],
  templateUrl: './trusted-brands.component.html',
  styleUrl: './trusted-brands.component.css'
})
export class TrustedBrandsComponent {

}
