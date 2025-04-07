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
  private sectionElements: {[key: string]: HTMLElement} = {};

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 50;
      this.checkActiveSectionOnScroll();
    }
  }

  ngOnInit() {
    if (this.isBrowser) {
      // Allow some time for the DOM to be fully rendered
      setTimeout(() => {
        this.setupSectionObservers();
      }, 100);
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

  private checkActiveSectionOnScroll(): void {
    if (!this.isBrowser || Object.keys(this.sectionElements).length === 0) return;
    
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    
    for (const section of ['home', 'about', 'services', 'reviews', 'contact']) {
      const element = this.sectionElements[section];
      
      if (!element) continue;
      
      const topPosition = element.offsetTop;
      const height = element.offsetHeight;
      
      if (scrollPosition >= topPosition && scrollPosition <= topPosition + height) {
        if (this.activeSection !== section) {
          this.activeSection = section;
        }
        break;
      }
    }
  }

  private setupSectionObservers(): void {
    const sections = ['home', 'about', 'services', 'reviews', 'contact'];
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (!element) return;
      
      // Store reference to each section element
      this.sectionElements[section] = element;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            // Use a lower threshold for better detection
            if (entry.isIntersecting) {
              // For services specifically, make it more sensitive
              if (section === 'services' || entry.intersectionRatio > 0.2) {
                this.activeSection = section;
              }
            }
          });
        },
        { 
          threshold: [0.1, 0.2, 0.5],
          rootMargin: '-10% 0px -10% 0px' // Adjust the root margin to create a better detection area
        }
      );
      
      observer.observe(element);
      this.observers.push(observer);
    });
    
    // Initial check for active section
    this.checkActiveSectionOnScroll();
  }
}
