import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateDirective } from '../../shared/directives/translate.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
