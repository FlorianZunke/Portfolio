import { Component } from '@angular/core';
import { OverlayService } from '../../services/overlay.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  constructor(public overlayService: OverlayService) {}

  toggleOverlay() {
    console.log('Menu Status:', this.overlayService.isOpen); // Debugging
    
    if (!this.overlayService.isOpen) {
      this.overlayService.openOverlay();
    } else {
      this.overlayService.closeOverlay();
    }
  }
}
