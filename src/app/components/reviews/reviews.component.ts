import { Component, OnInit, OnDestroy, PLATFORM_ID, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateDirective } from '../../shared/directives/translate.directive';

interface Review {
  id: string;
  text: string;
  textTranslateKey: string;
  guestName: string;
  country: string;
  countryFlag: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, TranslateDirective],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private cdr = inject(ChangeDetectorRef);
  private slideInterval?: ReturnType<typeof setInterval>;
  currentReviewIndex = 0;

  reviews: Review[] = [
    {
      id: '1',
      text: 'The apartment exceeded our expectations! The lake view was breathtaking, and the amenities were top-notch. We especially loved the morning coffee on the terrace.',
      textTranslateKey: 'review_1_text',
      guestName: 'Sarah & John',
      country: 'United Kingdom',
      countryFlag: '🇬🇧'
    },
    {
      id: '2',
      text: 'Perfect location for a peaceful getaway. The staff was incredibly helpful, and the apartment was immaculate. The lake activities made our stay even more special.',
      textTranslateKey: 'review_2_text',
      guestName: 'Hans & Maria',
      country: 'Germany',
      countryFlag: '🇩🇪'
    },
    {
      id: '3',
      text: 'An unforgettable experience! The apartment was beautifully designed, and the lakeside café served delicious local cuisine. We will definitely return!',
      textTranslateKey: 'review_3_text',
      guestName: 'Ahmed & Fatima',
      country: 'UAE',
      countryFlag: '🇦🇪'
    }
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startSlideshow();
    }
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  private startSlideshow(): void {
    this.slideInterval = setInterval(() => {
      this.currentReviewIndex = (this.currentReviewIndex + 1) % this.reviews.length;
      this.cdr.detectChanges();
    }, 5000);
  }

  selectReview(index: number): void {
    this.currentReviewIndex = index;
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.startSlideshow();
    }
  }
} 