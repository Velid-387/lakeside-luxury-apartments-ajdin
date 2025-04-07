import { Component, HostListener, PLATFORM_ID, inject, OnInit, OnDestroy } from '@angular/core';
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
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isScrolled = false;
  activeSection = 'home';
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private observers: IntersectionObserver[] = [];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.setupSectionObservers();
    }
  }

  ngOnDestroy() {
    // Disconnect all observers when component is destroyed
    this.observers.forEach(observer => observer.disconnect());
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

  setActiveSection(section: string): void {
    this.activeSection = section;
    this.closeMenu();
  }

  private setupSectionObservers(): void {
    const sections = ['home', 'about', 'services', 'reviews', 'contact'];
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (!element) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              this.activeSection = section;
            }
          });
        },
        { threshold: 0.5 }
      );
      
      observer.observe(element);
      this.observers.push(observer);
    });
  }
}
