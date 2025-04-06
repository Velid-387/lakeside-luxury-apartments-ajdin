import { Directive, ElementRef, Input, OnInit, inject, OnDestroy, effect } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appTranslate]',
  standalone: true
})
export class TranslateDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private translationService = inject(TranslationService);
  private subscription: Subscription | null = null;
  
  @Input('appTranslate') key: string = '';
  @Input() translateParams: Record<string, string> = {};

  constructor() {
    // Use Angular's effect for reactive updates with signals
    effect(() => {
      // This will automatically re-run when language changes
      const currentLang = this.translationService.getCurrentLang();
      this.updateTranslation();
    });
  }

  ngOnInit(): void {
    if (!this.key) {
      // If no key provided, use the element's content as the key
      this.key = this.el.nativeElement.innerText.trim();
    }
    this.updateTranslation();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateTranslation(): void {
    if (this.key) {
      let translatedText = this.translationService.translate(this.key);
      
      // Replace any parameters in the translation
      if (this.translateParams && Object.keys(this.translateParams).length > 0) {
        Object.keys(this.translateParams).forEach(param => {
          translatedText = translatedText.replace(`{{${param}}}`, this.translateParams[param]);
        });
      }
      
      this.el.nativeElement.innerText = translatedText;
    }
  }
} 