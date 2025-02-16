import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  private initLanguage() {
    const savedLang = localStorage.getItem('language') || 'de';
    this.translate.use(savedLang);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
