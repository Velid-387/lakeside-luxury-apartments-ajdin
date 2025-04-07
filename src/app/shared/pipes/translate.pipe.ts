import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // Needed to update when language changes
})
export class TranslatePipe implements PipeTransform {
  private translationService = inject(TranslationService);

  transform(key: string, params?: Record<string, string>): string {
    if (!key) {
      return '';
    }
    
    let translatedText = this.translationService.translate(key);
    
    // Replace parameters if provided
    if (params) {
      Object.keys(params).forEach(param => {
        translatedText = translatedText.replace(`{${param}}`, params[param]);
      });
    }
    
    return translatedText;
  }
} 