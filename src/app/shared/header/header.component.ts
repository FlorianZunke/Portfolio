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

  isOpen:boolean = false;

  constructor(public overlayService: OverlayService) {}

  toggleOverlay() {
    this.isOpen = !this.isOpen;
    console.log('Menu Status:', this.isOpen); // Debugging
    
    if (this.isOpen) {
      this.overlayService.openOverlay();
    } else {
      this.overlayService.closeOverlay();
    }
  }
}
