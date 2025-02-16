import { Component, inject, signal } from '@angular/core';
import { OverlayService } from '../../services/overlay.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  translateService = inject(TranslationService);
  activeLanguage = signal(this.translateService.getCurrentLanguage());

  constructor(public overlayService: OverlayService, private translate: TranslateService) {
    this.initLanguage();
  }

  private initLanguage() {
    const savedLang = localStorage.getItem('language') || 'de';
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
  }

  changeLanguage(lang: string) {
    this.translateService.setLanguage(lang);
    this.activeLanguage.set(lang);
  }
  
  toggleOverlay() {
    console.log('Menu Status:', this.overlayService.isOpen); // Debugging
    
    if (!this.overlayService.isOpen) {
      this.overlayService.openOverlay();
    } else {
      this.overlayService.closeOverlay();
    }
  }
}
