import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {
  isMenuOpen = signal(false);

  toggleMenu(newState: boolean) {
    this.isMenuOpen.set(newState);
  }
} 