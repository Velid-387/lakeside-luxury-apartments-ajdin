import { Component, inject, HostListener, ViewChild, ElementRef } from '@angular/core';
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
      <div class="mobile-switcher" #mobileSwitcher>
        <button
          class="current-lang"
          #langButton
          (click)="toggleDropdown($event)"
          [attr.aria-expanded]="isDropdownOpen"
          aria-label="Toggle language menu">
          {{ getCurrentLangDisplay() }}
          <i class="fas" [class]="isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
        </button>
        <div class="lang-dropdown" [class.show]="isDropdownOpen" [style.top.px]="dropdownTop">
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
      z-index: 1;
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
      background-color: transparent;
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
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      i {
        font-size: 0.75rem;
        transition: transform 0.3s ease;
        -webkit-transition: transform 0.3s ease;
      }

      &:hover {
        background-color: rgba(v.$primary-green, 0.05);
        background: rgba(v.$primary-green, 0.05);
      }
    }

    .lang-dropdown {
      position: fixed;
      top: auto;
      right: 16px;
      left: auto;
      width: 200px;
      max-width: calc(100vw - 32px);
      background-color: #ffffff !important;
      background: #ffffff !important;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
      overflow: visible;
      z-index: 9999;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
      pointer-events: none;
      -webkit-transform: translateY(-10px);
      -webkit-transition: opacity 0.3s ease, visibility 0.3s ease, -webkit-transform 0.3s ease;
      will-change: opacity, visibility, transform;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      isolation: isolate;

      @include m.respond-to(lg) {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        width: auto;
        min-width: 160px;
        max-width: 200px;
      }

      &.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        -webkit-transform: translateY(0);
        pointer-events: auto;
      }
    }

    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 12px 16px;
      border: none;
      background-color: transparent;
      background: transparent;
      cursor: pointer;
      transition: background-color 0.3s ease;
      color: v.$primary-green;
      font-size: 0.875rem;
      text-align: left;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background-color: rgba(v.$primary-green, 0.05);
        background: rgba(v.$primary-green, 0.05);
      }

      &.active {
        background: linear-gradient(135deg, v.$primary-green, v.$secondary-green);
        background-color: v.$primary-green;
        color: v.$white;
      }

      .flag {
        font-size: 1.25rem;
        flex-shrink: 0;
      }

      .lang-code {
        font-weight: 500;
        flex-shrink: 0;
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

      .lang-dropdown {
        left: 0;
        right: auto;
      }
    }
  `]
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