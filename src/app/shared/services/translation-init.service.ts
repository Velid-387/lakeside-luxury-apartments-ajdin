import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { TranslationService } from './translation.service';
import { translations } from '../i18n/translations';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TranslationInitService {
  private translationService = inject(TranslationService);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  initializeTranslations(): void {
    // Load all translations
    this.translationService.loadTranslations(translations);
    
    // Set initial document direction based on language if in browser
    if (this.isBrowser) {
      const currentLang = this.translationService.getCurrentLang();
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    }
  }
} 