import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;
  isHireOpen = false;
  isExtertiseOpen = false;
  isServiceOpen = false;
  isCompanyOpen = false;
  isworkOpen = false;
  isLearnOpen = false;
  scrolled = false;

  closeDropdownTimeout: any;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeAllDropdownsImmediate() {
    this.isHireOpen = false;
    this.isExtertiseOpen = false;
    this.isServiceOpen = false;
    this.isCompanyOpen = false;
    this.isworkOpen = false;
    this.isLearnOpen = false;
  }

  closeDropdown() {
    this.closeDropdownTimeout = setTimeout(() => {
      this.closeAllDropdownsImmediate();
    }, 100);
  }
  openServices() {
    clearTimeout(this.closeDropdownTimeout);
    this.closeAllDropdownsImmediate();
    this.isServiceOpen = true;
  }
  openLearn() {
    clearTimeout(this.closeDropdownTimeout);
    this.closeAllDropdownsImmediate();
    this.isLearnOpen = true;
  }
  openWork() {
    clearTimeout(this.closeDropdownTimeout);
    this.closeAllDropdownsImmediate();
    this.isworkOpen = true;
  }
  openCompany() {
    clearTimeout(this.closeDropdownTimeout);
    this.closeAllDropdownsImmediate();
    this.isCompanyOpen = true;
  }
  openExtertise() {
    clearTimeout(this.closeDropdownTimeout);
    this.closeAllDropdownsImmediate();
    this.isExtertiseOpen = true;
  }
  openHire() {
    clearTimeout(this.closeDropdownTimeout);
    this.closeAllDropdownsImmediate();
    this.isHireOpen = true;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Change threshold (50) if needed
    this.scrolled = window.pageYOffset > 50;
  }
}

