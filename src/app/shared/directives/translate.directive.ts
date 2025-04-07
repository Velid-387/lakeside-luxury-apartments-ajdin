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
  private originalHtml: string = '';
  
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
    try {
      // Store original HTML content
      this.originalHtml = this.el.nativeElement.innerHTML;
      
      if (!this.key) {
        // If no key provided, use the element's text content as the key
        this.key = this.el.nativeElement.textContent.trim();
      }
      this.updateTranslation();
    } catch (error) {
      // Silently handle SSR errors
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateTranslation(): void {
    if (!this.key) return;

    try {
      let translatedText = this.translationService.translate(this.key, this.translateParams);
      
      // Preserve HTML elements by replacing only text nodes
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = this.originalHtml;
      const textNodes = Array.from(tempDiv.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
      
      if (textNodes.length > 0) {
        textNodes[0].textContent = translatedText;
      } else {
        // If no text nodes found, append the translation
        tempDiv.appendChild(document.createTextNode(translatedText));
      }
      
      this.el.nativeElement.innerHTML = tempDiv.innerHTML;
    } catch (error) {
      // Silently handle SSR errors
    }
  }
} 