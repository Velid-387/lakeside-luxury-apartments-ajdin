import { Component, HostListener, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateDirective } from '../../shared/directives/translate.directive';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateDirective,
    TranslatePipe,
    LanguageSwitcherComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isBrowser) {
      document.body.classList.toggle('no-scroll', this.isMenuOpen);
    }
  }

  closeMenu(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      if (this.isBrowser) {
        document.body.classList.remove('no-scroll');
      }
    }
  }
}
