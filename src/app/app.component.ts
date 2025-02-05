import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OverlayService } from './services/overlay.service';
import { OverlayComponent } from './shared/components/drop-menu/drop-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OverlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  overlay = inject(OverlayService);
  title = 'Portfolio';
}
