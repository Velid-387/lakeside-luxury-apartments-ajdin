import { Component, HostListener, inject, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);
  private observers: IntersectionObserver[] = [];
  isMenuOpen = false;
  isScrolled = false;
  activeSection = 'home';

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy() {
    this.observers.forEach(observer => observer.disconnect());
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveSection(section: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.activeSection = section;
    this.scrollService.scrollToElement(section);
    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }

  private setupIntersectionObserver() {
    const sections = ['home', 'about', 'services', 'reviews', 'contact'];
    
    const options = {
      root: null,
      rootMargin: '-45% 0px -45% 0px', // Adjust these values to change when the active section updates
      threshold: 0
    };

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.activeSection = section;
            }
          });
        }, options);

        observer.observe(element);
        this.observers.push(observer);
      }
    });
  }
}
