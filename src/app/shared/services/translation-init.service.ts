import { Injectable, inject } from '@angular/core';
import { TranslationService } from './translation.service';
import { translations } from '../i18n/translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationInitService {
  private translationService = inject(TranslationService);

  initializeTranslations(): void {
    // Load all translations
    this.translationService.loadTranslations(translations);
  }
} 