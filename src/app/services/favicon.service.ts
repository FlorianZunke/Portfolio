import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaviconService {

  constructor() { 
    this.setFaviconBasedOnColorScheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      this.setFaviconBasedOnColorScheme();
    });
  }

  setFaviconBasedOnColorScheme() {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const faviconLink = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    
    if (faviconLink) {
      if (darkMode) {
        faviconLink.href = 'assets/img/logo_white.png';
      } else {
        faviconLink.href = 'assets/img/logo.png';
      }
    }
  }
}