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
    },
    {
      id: '4',
      text: 'The raft rental experience was amazing! We spent a whole day exploring the lake, finding quiet spots for swimming and picnicking. The staff was very professional and helpful.',
      textTranslateKey: 'review_4_text',
      guestName: 'Marco & Sofia',
      country: 'Italy',
      countryFlag: '🇮🇹'
    },
    {
      id: '5',
      text: 'Exceptional hospitality! From the moment we arrived, we felt like VIP guests. The attention to detail in the apartment and the stunning sunrise views made our honeymoon perfect.',
      textTranslateKey: 'review_5_text',
      guestName: 'Pierre & Marie',
      country: 'France',
      countryFlag: '🇫🇷'
    },
    {
      id: '6',
      text: 'A perfect family vacation spot! The kids loved the lake activities, and we enjoyed the spacious apartment. The café\'s family-friendly menu was a big plus.',
      textTranslateKey: 'review_6_text',
      guestName: 'Lars & Anna',
      country: 'Sweden',
      countryFlag: '🇸🇪'
    },
    {
      id: '7',
      text: 'The tranquility of this place is unmatched! We spent evenings on the terrace watching the sunset over the lake. The apartment\'s modern amenities combined with the natural setting created a perfect balance.',
      textTranslateKey: 'review_7_text',
      guestName: 'Yuki & Akiko',
      country: 'Japan',
      countryFlag: '🇯🇵'
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