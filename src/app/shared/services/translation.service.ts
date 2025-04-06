import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export type Language = 'en' | 'bs' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: Record<string, Record<Language, string>> = {};
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  
  // Use signals for better performance with Angular's change detection
  private currentLangSignal = signal<Language>('en');
  
  // For backward compatibility with older rxjs patterns
  private languageSubject = new BehaviorSubject<Language>('en');
  currentLang$ = this.languageSubject.asObservable();
  
  constructor() {
    // Only access localStorage in browser environment
    if (this.isBrowser) {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && (savedLang === 'en' || savedLang === 'bs')) {
        this.setLanguage(savedLang);
      }
    }
  }

  setLanguage(lang: Language): void {
    this.currentLangSignal.set(lang);
    this.languageSubject.next(lang);
    
    // Only access localStorage in browser environment
    if (this.isBrowser) {
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
      
      // Set direction based on language
      if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    }
  }

  getCurrentLang(): Language {
    return this.currentLangSignal();
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translation[this.currentLangSignal()] || key;
  }

  loadTranslations(translations: Record<string, Record<Language, string>>): void {
    this.translations = { ...this.translations, ...translations };
  }
} 