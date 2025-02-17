import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OverlayService } from './services/overlay.service';
import { OverlayComponent } from './shared/components/drop-menu/drop-menu.component';

import { TranslationService } from './services/translation.service';
import { FaviconService } from './services/favicon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  overlay = inject(OverlayService);
  translateService = inject(TranslationService);

  title = 'Portfolio';

  constructor(private faviconService: FaviconService) {
    this.translateService.getCurrentLanguage();
    this.faviconService.setFaviconBasedOnColorScheme();
  }
}
