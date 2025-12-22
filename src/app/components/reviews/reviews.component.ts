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
      text: 'The room is modern with Ac. Beds are comfortable and ensuite spacious. Definitely recommend this place. The host is helpful and welcoming. The breakfast was freshly made with fresh fruit and dry meat.',
      textTranslateKey: 'review_1_text',
      guestName: 'Anne',
      country: 'Malta',
      countryFlag: '🇲🇹'
    },
    {
      id: '2',
      text: 'The view of the lake was gorgeous. The staff were all friendly and helpful. We did not hear any train noise or noise from the bridge as the windows are insulated very well.',
      textTranslateKey: 'review_2_text',
      guestName: 'Nicola',
      country: 'Germany',
      countryFlag: '🇩🇪'
    },
    {
      id: '3',
      text: 'Property is great, breakfast was great, and the host, Ajdin, was exceptional. If you want a place to stay, with no trouble at all, this is the one. Our stay here made the trip to Jablanica even more memorable.',
      textTranslateKey: 'review_3_text',
      guestName: 'Nikola',
      country: 'Bosnia and Herzegovina',
      countryFlag: '🇧🇦'
    },
    {
      id: '4',
      text: 'I absolutely loved this place – from the room to everything else. I rented a room with a lake view and wow, just amazing! It was such a beautiful spot to sit outside and enjoy the view. The service was excellent, with friendly and welcoming staff. The building is new, and although the room was basic, it was clean and had a comfortable bed. The blackout blinds made it easy to sleep through the night. Breakfast was also very good. Highly recommended!',
      textTranslateKey: 'review_4_text',
      guestName: 'Zinab',
      country: 'Sweden',
      countryFlag: '🇸🇪'
    },
    {
      id: '5',
      text: 'I would like to thank the owner Ajdin, he was very helpful and kind, i felt home as his family welcomed me and treat my children as if they were their own. The apartment was very clean and it’s new. The location of the apartment and the view were amazing. Ajdin took us on a trip on early morning with a great breakfast during the trip to enjoy the lake and the breakfast. After that he took us to a great beach to swim in the river. This experience is unforgettable and made my visit to Bosnia great already.',
      textTranslateKey: 'review_5_text',
      guestName: 'Abdulaziz',
      country: 'Saudi Arabia',
      countryFlag: '🇸🇦'
    },
    {
      id: '6',
      text: 'The room was very confortable, the bed and the pillows too. At morning we got up with a wonderful lake view, drinked a coffe at the cafè and took a nice lake tour with Ajdan the owner. He was very nice and patience with out kids too. We spend a very nice day by the lake, sure we will be back next time in summer.',
      textTranslateKey: 'review_6_text',
      guestName: 'Valentina',
      country: 'Italy',
      countryFlag: '🇮🇹'
    },
    {
      id: '7',
      text: 'Beautiful natural environment, easy access, hospitality. They cook very tasty in the kitchen, the room was new and clean. The lake is simply fantastic, crystal clear and not cold. They rent a boat at their own jetty at a fair price - it is a great experience. We will be back!',
      textTranslateKey: 'review_7_text',
      guestName: 'Bujáki',
      country: 'Hungary',
      countryFlag: '🇭🇺'
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