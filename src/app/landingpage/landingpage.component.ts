import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  
  constructor(private translate: TranslateService) {}
}
