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
    </div>
  `,
  styles: [`
    .language-switcher {
      display: flex;
      gap: 0.5rem;
    }
    
    .lang-btn {
      background: transparent;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.2s ease;
    }
    
    .lang-btn.active {
      background-color: #2a5b8c;
      color: white;
      border-color: #2a5b8c;
    }
    
    .lang-btn:hover:not(.active) {
      background-color: #f5f5f5;
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