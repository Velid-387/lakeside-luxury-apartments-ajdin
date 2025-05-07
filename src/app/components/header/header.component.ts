import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private scrollService = inject(ScrollService);
  isMenuOpen = false;
  isScrolled = false;
  activeSection = 'home';

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveSection(section: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.activeSection = section;
    this.scrollService.scrollToElement(section);
    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }
}
