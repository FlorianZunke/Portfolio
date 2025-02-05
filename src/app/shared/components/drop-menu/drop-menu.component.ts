import { Component } from '@angular/core';
import { OverlayService } from '../../../services/overlay.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";


@Component({
  selector: 'app-drop-menu',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './drop-menu.component.html',
  styleUrl: './drop-menu.component.scss'
})
export class OverlayComponent {
  constructor(public overlayService: OverlayService) {}

  closeOverlay() {
    this.overlayService.closeOverlay();
  }
}
