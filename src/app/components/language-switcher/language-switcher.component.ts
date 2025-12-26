import { Component, inject, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '../../shared/services/translation.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  private translationService = inject(TranslationService);
  isDropdownOpen = false;
  dropdownTop: number | null = null;

  @ViewChild('langButton') langButton?: ElementRef<HTMLButtonElement>;

  // Using Regional Indicator Symbols for better compatibility
  availableLanguages = [
    { 
      code: 'en' as Language, 
      name: 'English', 
      display: 'EN', 
      flag: '🇬🇧'
    },
    { 
      code: 'bs' as Language, 
      name: 'Bosnian', 
      display: 'BS', 
      flag: '🇧🇦'
    },
    { 
      code: 'ar' as Language, 
      name: 'Arabic', 
      display: 'AR', 
      flag: '🇸🇦'
    }
  ];
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Check if click is outside both the mobile-switcher and the dropdown
    if (!target.closest('.mobile-switcher') && !target.closest('.lang-dropdown')) {
      this.isDropdownOpen = false;
    }
  }

  isActive(lang: Language): boolean {
    return this.translationService.getCurrentLang() === lang;
  }
  
  setLanguage(lang: Language): void {
    this.translationService.setLanguage(lang);
  }

  setLanguageAndClose(lang: Language): void {
    this.setLanguage(lang);
    this.isDropdownOpen = false;
  }

  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;

    if (this.isDropdownOpen && this.langButton) {
      const buttonRect = this.langButton.nativeElement.getBoundingClientRect();
      this.dropdownTop = buttonRect.bottom + 8;
    }
  }

  getCurrentLangDisplay(): string {
    const currentLang = this.translationService.getCurrentLang();
    return this.availableLanguages.find(lang => lang.code === currentLang)?.display || 'EN';
  }
} 