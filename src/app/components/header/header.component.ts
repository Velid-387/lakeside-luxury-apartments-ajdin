import { Component, HostListener, inject, OnInit, OnDestroy, PLATFORM_ID, Renderer2 } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { TranslateDirective } from '../../shared/directives/translate.directive';
import { ScrollService } from '../../shared/services/scroll.service';
import { MenuStateService } from '../../shared/services/menu-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);
  private menuState = inject(MenuStateService);
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);
  private observers: IntersectionObserver[] = [];
  private scrollPosition = 0;
  private scrollLockClass = 'no-scroll';
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
      this.enableScroll();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.isMenuOpen()) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  private disableScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollPosition = window.pageYOffset;
      const html = this.document.documentElement as HTMLElement;
      const body = this.document.body;
      
      this.renderer.setStyle(body, 'top', `-${this.scrollPosition}px`);
      this.renderer.setStyle(body, 'position', 'fixed');
      this.renderer.setStyle(body, 'width', '100%');
      this.renderer.setStyle(html, 'overflow', 'hidden');
      this.renderer.addClass(html, this.scrollLockClass);
      this.renderer.addClass(body, this.scrollLockClass);
    }
  }

  private enableScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const html = this.document.documentElement as HTMLElement;
      const body = this.document.body;
      
      this.renderer.removeStyle(body, 'top');
      this.renderer.removeStyle(body, 'position');
      this.renderer.removeStyle(body, 'width');
      this.renderer.removeStyle(html, 'overflow');
      this.renderer.removeClass(html, this.scrollLockClass);
      this.renderer.removeClass(body, this.scrollLockClass);
      
      window.scrollTo(0, this.scrollPosition);
    }
  }

  toggleMenu() {
    const newState = !this.isMenuOpen();
    this.menuState.toggleMenu(newState);
    
    if (newState) {
      this.disableScroll();
    } else {
      this.enableScroll();
    }
  }

  setActiveSection(section: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    
    this.activeSection = section;
    
    if (this.isMenuOpen()) {
      this.toggleMenu();
    }
    
    // Small delay to ensure scroll works after menu closes
    setTimeout(() => {
      this.scrollService.scrollToElement(section);
    }, 100);
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
