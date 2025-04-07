import { Component, OnInit, OnDestroy, PLATFORM_ID, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateDirective } from '../../shared/directives/translate.directive';

interface SlideImage {
  url: string;
  loaded: boolean;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);
  private slideInterval?: ReturnType<typeof setInterval>;
  currentImageIndex = 0;
  
  images: SlideImage[] = [
    { url: '/assets/images/ajdin/cover.jpg', loaded: false },
    { url: '/assets/images/ajdin/apartman-1.jpg', loaded: false },
    { url: '/assets/images/ajdin/apartman-2.jpg', loaded: false },
    { url: '/assets/images/ajdin/jezero.jpg', loaded: false }
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.preloadImages();
    } else {
      // Mark all images as loaded in SSR to avoid issues
      this.images = this.images.map(img => ({ ...img, loaded: true }));
      // Don't start slideshow in SSR
      this.currentImageIndex = 0;
    }
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  private preloadImages(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    let loadedCount = 0;
    this.images.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        this.images[index].loaded = true;
        loadedCount++;
        if (loadedCount === this.images.length) {
          this.startSlideshow();
          // Ensure view is updated after images are loaded
          this.cdr.detectChanges();
        }
      };
      img.src = image.url;
    });
  }

  private startSlideshow(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Clear any existing interval
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    
    this.slideInterval = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      // Ensure view is updated after index change
      this.cdr.detectChanges();
    }, 3000);
  }

  getBackgroundStyle(image: SlideImage): string {
    if (!image.loaded) return 'none';
    return `url(${image.url})`;
  }
}
