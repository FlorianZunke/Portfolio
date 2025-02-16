import { Component } from '@angular/core';
import { OverlayService } from '../../../services/overlay.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { Router, RouterLink, NavigationExtras } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-drop-menu',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink, TranslateModule],
  templateUrl: './drop-menu.component.html',
  styleUrl: './drop-menu.component.scss'
})
export class OverlayComponent {
  constructor(public overlayService: OverlayService, private router: Router, private translate: TranslateService) {
  }

  closeOverlay() {
    this.overlayService.closeOverlay();
  }

  navigateToSection(sectionId: string) {
    this.closeOverlay();

    const extras: NavigationExtras = {
      fragment: sectionId
    };

    this.router.navigate(['/'], extras);
  }
}