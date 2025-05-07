import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateDirective } from '../../shared/directives/translate.directive';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateDirective],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private scrollService = inject(ScrollService);
  currentYear = new Date().getFullYear();

  scrollToSection(section: string, event: Event): void {
    event.preventDefault();
    this.scrollService.scrollToElement(section);
  }
}
