import { Component, HostListener, inject, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { TranslateDirective } from '../../shared/directives/translate.directive';
import { ScrollService } from '../../shared/services/scroll.service';
import { MenuStateService } from '../../shared/services/menu-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent, TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);
  private menuState = inject(MenuStateService);
  private observers: IntersectionObserver[] = [];
  isScrolled = false;
  activeSection = 'home';

  get isMenuOpen() {
    return this.menuState.isMenuOpen;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy() {
    this.observers.forEach(observer => observer.disconnect());
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('no-scroll');
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.isMenuOpen()) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleMenu() {
    const newState = !this.isMenuOpen();
    this.menuState.toggleMenu(newState);
    
    if (isPlatformBrowser(this.platformId)) {
      if (newState) {
        document.body.classList.add('no-scroll');
        document.body.style.top = `-${window.scrollY}px`;
      } else {
        document.body.classList.remove('no-scroll');
        const scrollY = document.body.style.top;
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }

  setActiveSection(section: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.activeSection = section;
    this.scrollService.scrollToElement(section);
    if (this.isMenuOpen()) {
      this.toggleMenu();
    }
  }

  private setupIntersectionObserver() {
    const sections = ['home', 'about', 'services', 'reviews', 'contact'];
    
    const options = {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
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
