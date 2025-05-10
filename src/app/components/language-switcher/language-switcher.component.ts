import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '../../shared/services/translation.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
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
      <div class="mobile-switcher" #mobileSwitch>
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
            {{ lang.display }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @import '../../../app/shared/styles/variables';
    @import '../../../app/shared/styles/mixins';

    :host {
      display: block;
      position: relative;
    }

    .language-switcher {
      position: relative;
      z-index: 1200;
    }

    // Desktop styles
    .desktop-switcher {
      display: none;
      gap: 0.5rem;
      align-items: center;
      
      @include respond-to(lg) {
        display: flex;
      }
    }
    
    .lang-btn {
      @include button-small;
      background: transparent;
      border: 1px solid $medium-gray;
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
      font-weight: 500;
      position: relative;
      transition: all 0.3s ease;
      transform-origin: center;
      
      &.active {
        background: linear-gradient(135deg, $primary-blue, $deep-blue);
        color: $white;
        border-color: transparent;
        transform: none;
      }
      
      &:hover:not(.active) {
        background: linear-gradient(135deg, rgba($accent-teal, 0.1), rgba($primary-blue, 0.1));
        border-color: $accent-teal;
        color: $accent-teal;
        transform: none;
      }
    }

    // Mobile styles
    .mobile-switcher {
      display: block;
      position: relative;
      
      @include respond-to(lg) {
        display: none;
      }
    }

    .current-lang {
      @include button-small;
      background: transparent;
      border: 1px solid $medium-gray;
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
        background: rgba($primary-blue, 0.05);
      }
    }

    .lang-dropdown {
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      background: $white;
      border-top: 1px solid $medium-gray;
      border-bottom: 1px solid $medium-gray;
      min-width: 100%;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s ease;
      box-shadow: $shadow-sm;
      z-index: 1300;
      padding: 0.5rem 0;
      
      @include respond-to(lg) {
        position: absolute;
        top: calc(100% + 5px);
        left: auto;
        right: 0;
        border: 1px solid $medium-gray;
        border-radius: $border-radius;
        width: auto;
        min-width: 120px;
      }
      
      &.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }

    .dropdown-item {
      display: block;
      width: 100%;
      padding: 1rem;
      text-align: center;
      border: none;
      background: none;
      font-size: 1rem;
      color: $deep-blue;
      cursor: pointer;
      transition: all 0.2s ease;
      
      @include respond-to(lg) {
        padding: 0.5rem 1rem;
        text-align: left;
        font-size: 0.875rem;
      }
      
      &:hover {
        background: rgba($primary-blue, 0.05);
      }
      
      &.active {
        background: linear-gradient(135deg, $primary-blue, $deep-blue);
        color: $white;
      }
    }

    // RTL Support
    :host-context(html[dir="rtl"]) {
      .dropdown-item {
        text-align: center;
        
        @include respond-to(lg) {
          text-align: right;
        }
      }
      
      .current-lang {
        flex-direction: row-reverse;
      }
    }
  `]
})
export class LanguageSwitcherComponent {
  private translationService = inject(TranslationService);
  isDropdownOpen = false;

  availableLanguages = [
    { code: 'en' as Language, name: 'English', display: 'EN' },
    { code: 'bs' as Language, name: 'Bosnian', display: 'BS' },
    { code: 'ar' as Language, name: 'Arabic', display: 'AR' }
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