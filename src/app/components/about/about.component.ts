import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateDirective } from '../../shared/directives/translate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {}
