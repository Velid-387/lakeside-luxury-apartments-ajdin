import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '../../shared/services/translation.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="language-switcher">
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
  `,
  styles: [`
    @import '../../../app/shared/styles/variables';
    @import '../../../app/shared/styles/mixins';

    .language-switcher {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      height: 100%;
      position: relative;
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
  `]
})
export class LanguageSwitcherComponent {
  private translationService = inject(TranslationService);
  
  isActive(lang: Language): boolean {
    return this.translationService.getCurrentLang() === lang;
  }
  
  setLanguage(lang: Language): void {
    this.translationService.setLanguage(lang);
  }
} 