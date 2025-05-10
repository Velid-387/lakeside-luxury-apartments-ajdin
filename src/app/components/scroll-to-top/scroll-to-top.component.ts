import { Component, HostListener, PLATFORM_ID, inject, signal, computed } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { MenuStateService } from '../../shared/services/menu-state.service';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ScrollToTopComponent {
  private menuState = inject(MenuStateService);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private scrolledEnough = signal(false);
  
  isVisible = computed(() => {
    return this.scrolledEnough() && !this.menuState.isMenuOpen();
  });
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.scrolledEnough.set(window.scrollY > 500);
    }
  }
  
  scrollToTop(): void {
    if (this.isBrowser) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
} 