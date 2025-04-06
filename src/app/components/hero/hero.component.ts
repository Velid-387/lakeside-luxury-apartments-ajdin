import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateDirective } from '../../shared/directives/translate.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {}
