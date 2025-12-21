import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '../../shared/services/translation.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-switcher">
      <!-- Desktop view -->
      <div class="desktop-switcher">
        <button 
          class="lang-btn" 
          [class.active]="isActive('en')" 
          (click)="setLanguage('en')" 
          aria-label="Switch to English">
          EN
        </button>
        <button 
          class="lang-btn" 
          [class.active]="isActive('bs')" 
          (click)="setLanguage('bs')" 
          aria-label="Switch to Bosnian">
          BS
        </button>
        <button 
          class="lang-btn" 
          [class.active]="isActive('ar')" 
          (click)="setLanguage('ar')" 
          aria-label="Switch to Arabic">
          AR
        </button>
      </div>

      <!-- Mobile view -->
      <div class="mobile-switcher">
        <button 
          class="current-lang" 
          (click)="toggleDropdown($event)"
          [attr.aria-expanded]="isDropdownOpen"
          aria-label="Toggle language menu">
          {{ getCurrentLangDisplay() }}
          <i class="fas" [class]="isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
        </button>
        <div class="lang-dropdown" [class.show]="isDropdownOpen">
          <button 
            *ngFor="let lang of availableLanguages"
            class="dropdown-item"
            [class.active]="isActive(lang.code)"
            (click)="setLanguageAndClose(lang.code)"
            [attr.aria-label]="'Switch to ' + lang.name">
            <span class="flag" [innerHTML]="lang.flag"></span>
            <span class="lang-code">{{ lang.display }}</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @use '../../../app/shared/styles/variables' as v;
    @use '../../../app/shared/styles/mixins' as m;

    :host {
      display: block;
      position: relative;
    }

    .language-switcher {
      position: relative;
      display: inline-block;
    }

    // Desktop styles
    .desktop-switcher {
      display: none;
      gap: 0.5rem;
      align-items: center;

      @include m.respond-to(lg) {
        display: flex;
      }
    }

    .lang-btn {
      @include m.button-small;
      background: transparent;
      border: 1px solid v.$medium-gray;
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
      font-weight: 500;
      position: relative;
      transition: all 0.3s ease;
      transform-origin: center;

      &.active {
        background: linear-gradient(135deg, v.$primary-green, v.$secondary-green);
        color: v.$white;
        border-color: transparent;
        transform: none;
      }

      &:hover:not(.active) {
        background: linear-gradient(135deg, rgba(v.$light-green, 0.1), rgba(v.$primary-green, 0.1));
        border-color: v.$light-green;
        color: v.$primary-green;
        transform: none;
      }
    }

    // Mobile styles
    .mobile-switcher {
      display: block;
      position: relative;

      @include m.respond-to(lg) {
        display: none;
      }
    }

    .current-lang {
      @include m.button-small;
      background: transparent;
      border: 1px solid v.$medium-gray;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      min-width: 80px;
      justify-content: space-between;

      i {
        font-size: 0.75rem;
        transition: transform 0.3s ease;
      }

      &:hover {
        background: rgba(v.$primary-green, 0.05);
      }
    }

    .lang-dropdown {
      position: fixed;
      top: auto;
      left: 50%;
      transform: translateX(-50%) translateY(10px);
      width: 200px;
      background: v.$white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      z-index: 2000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      margin-top: 8px;

      @include m.respond-to(lg) {
        position: absolute;
        top: 100%;
        left: auto;
        right: 0;
        transform: translateY(10px);
        width: auto;
        min-width: 160px;
      }

      &.show {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(0);

        @include m.respond-to(lg) {
          transform: translateY(0);
        }
      }
    }

    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 12px 16px;
      border: none;
      background: none;
      cursor: pointer;
      transition: all 0.3s ease;
      color: v.$primary-green;
      font-size: 0.875rem;
      text-align: left;

      &:hover {
        background: rgba(v.$primary-green, 0.05);
      }

      &.active {
        background: linear-gradient(135deg, v.$primary-green, v.$secondary-green);
        color: v.$white;
      }

      .flag {
        font-size: 1.25rem;
      }

      .lang-code {
        font-weight: 500;
      }
    }

    // RTL Support
    :host-context(html[dir="rtl"]) {
      .dropdown-item {
        text-align: right;
        flex-direction: row-reverse;
      }

      .current-lang {
        flex-direction: row-reverse;
      }

      @include m.respond-to(lg) {
        .lang-dropdown {
          left: 0;
          right: auto;
        }
      }
    }
  `]
})
export class LanguageSwitcherComponent {
  private translationService = inject(TranslationService);
  isDropdownOpen = false;

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
    if (!target.closest('.mobile-switcher')) {
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
  }

  getCurrentLangDisplay(): string {
    const currentLang = this.translationService.getCurrentLang();
    return this.availableLanguages.find(lang => lang.code === currentLang)?.display || 'EN';
  }
} 