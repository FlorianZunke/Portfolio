import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})

export class ReferencesComponent {
  hovered: boolean = false;
  referenceDatas = signal<any[]>([]);

  constructor(private translate: TranslateService) {
    this.loadTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  private loadTranslations() {
    this.translate.get('references-quotes').subscribe((translatedReferences) => {
      this.referenceDatas.set(translatedReferences);
    });
  }

  onHover() {
    if (!this.hovered) {
      this.hovered = true;
    }
  }
}
