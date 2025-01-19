import { Component } from '@angular/core';
import { ReferenceCardComponent } from '../shared/components/reference-card/reference-card.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [ReferenceCardComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

}
